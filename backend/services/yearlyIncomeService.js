import NoiSchema from "../models/NOIschema.js";

export async function getIncomeReport(year) {
  try {
    const pipeline = [
      //filtering completed nois
      {
        $match: {
          status: "Completed",
        },
      },

      //joining clients collection to access datOfMortgage
      {
        $lookup: {
          from: "clients",
          localField: "client",
          foreignField: "_id",
          as: "clientData",
        },
      },

      //converting array from $lookup to an object

      {
        $unwind: "$clientData",
      },
    ];

    if (year && year !== "all") {
      const numericYear = Number(year);

      if (isNaN(numericYear) || numericYear < 2000) {
        const error = new Error("Invalid year provided");
        error.statusCode = 400;
        throw error;
      }

      pipeline.push({
        $match: {
          $expr: {
            $eq: [{ $year: "$clientData.dateOfMortgage" }, numericYear],
          },
        },
      });
    }

    //calculation totals

    pipeline.push(
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
    );

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
      year: year === "all" ? "all" : Number(year),
      ...(result[0] || defaultSummary),
    };
  } catch (error) {
    console.log("Get income report service error : ", error);
    throw error;
  }
}
