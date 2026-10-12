import NoiSchema from "../models/NOIschema.js";

export async function getMonthlyIncomeReport(year, month) {
  try {
    const numericYear = Number(year);
    const numericMonth = Number(month);

    //validating year
    if (isNaN(numericYear) || numericYear < 2000) {
      const error = new Error("Invalid year");
      error.statusCode = 400;
      throw error;
    }

    //validating month
    if (isNaN(numericMonth) || numericMonth < 1 || numericMonth > 12) {
      const monthError = new Error("Invalid month");
      monthError.statusCode = 400;
      throw monthError;
    }

    const pipeline = [
      //filtering completed nois
      {
        $match: {
          status: "Completed",
        },
      },

      //joining client collection
      {
        $lookup: {
          from: "clients",
          localField: "client",
          foreignField: "_id",
          as: "clientData",
        },
      },

      //converting array to object
      {
        $unwind: "$clientData",
      },

      //filtering year and month
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: [
                  {
                    $year: "$clientData.dateOfMortgage",
                  },
                  numericYear,
                ],
              },

              {
                $eq: [{ $month: "$clientData.dateOfMortgage" }, numericMonth],
              },
            ],
          },
        },
      },

      //calculating totals
      {
        $group: {
          _id: null,
          totalNois: { $sum: 1 },
          totalLoanAmount: { $sum: "$loanAmount" },
          total03Challan: { $sum: "$challan03" },
          total05Challan: { $sum: "$challan05" },
          totalDhc: { $sum: "$dhc" },
          totalGovernmentCharges: { $sum: "$governmentCharges" },
          totalIntimationIncome: { $sum: "$intimationCharges" },
          totalAmountCollected: { $sum: "$totalAmount" },
        },
      },

      //project
      {
        $project: {
          _id: 0,
          totalNois: 1,
          totalLoanAmount: 1,
          total03Challan: 1,
          total05Challan: 1,
          totalDhc: 1,
          totalGovernmentCharges: 1,
          totalIntimationIncome: 1,
          totalAmountCollected: 1,
        },
      },
    ];

    const result = await NoiSchema.aggregate(pipeline);

    const defaultSummary = {
      totalNois: 0,
      totalLoanAmount: 0,
      total03Challan: 0,
      total05Challan: 0,
      totalDhc: 0,
      totalGovernmentCharges: 0,
      totalIntimationIncome: 0,
      totalAmountCollected: 0,
    };

    return {
      year: numericYear,
      month: numericMonth,
      ...(result[0] || defaultSummary),
    };
  } catch (error) {
    console.log("Get monthly income report service error : ", error);

    throw error;
  }
}

//get monthly income trend chart

export async function getMonthlyIncomeTrendService(year) {
  try {
    const numericYear = Number(year);

    if (isNaN(numericYear) || numericYear < 2020) {
      const error = new Error("Invalid Year");
      error.statusCode = 400;
      throw error;
    }

    const pipeline = [
      {
        $match: {
          status: "Completed",
        },
      },

      {
        $lookup: {
          from: "clients",
          localField: "client",
          foreignField: "_id",
          as: "clientData",
        },
      },

      {
        $unwind: "$clientData",
      },

      {
        $match: {
          $expr: {
            $eq: [{ $year: "$clientData.dateOfMortgage" }, numericYear],
          },
        },
      },

      //group by month instead of a single total - this is the one real change

      {
        $group: {
          _id: {
            $month: "$clientData.dateOfMortgage",
          },
          totalNois: { $sum: 1 },
          totalIntimationIncome: { $sum: "$intimationCharges" },
        },
      },

      {
        $project: {
          _id: 0,
          month: "$_id",
          totalNois: 1,
          totalIntimationIncome: 1,
        },
      },
    ];

    const result = await NoiSchema.aggregate(pipeline);

    //fill in every month from Jan up to the current month (if this is the current year)
    //so a month with zero income still shows as 0, not a gap in the chart

    const now = new Date();
    const isCurrentYear = numericYear === now.getFullYear();
    const lastMonth = isCurrentYear ? now.getMonth() + 1 : 12;

    const trend = [];
    for (let month = 1; month <= lastMonth; month++) {
      const found = result.find((r) => r.month === month);
      trend.push({
        month,
        totalNois: found?.totalNois || 0,
        totalIntimationIncome: found?.totalIntimationIncome || 0,
      });
    }

    return trend;
  } catch (error) {
    console.log("Get monthly income trend service error : ", error);
    throw error;
  }
}
