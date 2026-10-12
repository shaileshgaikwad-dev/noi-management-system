import NoiSchema from "../models/NOIschema.js";
import mongoose from "mongoose";

export async function agentWiseIncomeService(agentId, year, month) {
  try {
    const pipeline = [];

    //filtering by agent

    if (agentId && agentId !== "all") {
      pipeline.push({
        $match: {
          agent: new mongoose.Types.ObjectId(agentId),
        },
      });
    }

    //Joining client collection
    pipeline.push({
      $lookup: {
        from: "clients",
        localField: "client",
        foreignField: "_id",
        as: "clientData",
      },
    });

    //converting client array into object

    pipeline.push({
      $unwind: "$clientData",
    });

    if (year && year !== "all") {
      const numericYear = Number(year);

      if (isNaN(numericYear) || numericYear < 2000) {
        const error = new Error("Invalid Year selected");
        error.statusCode = 404;
        throw error;
      }

      pipeline.push({
        $match: {
          $expr: {
            $eq: [
              {
                $year: "$clientData.dateOfMortgage",
              },
              numericYear,
            ],
          },
        },
      });
    }

    //filtering by month

    if (month && month !== "all") {
      const numericMonth = Number(month);

      if (isNaN(numericMonth) || numericMonth < 1 || numericMonth > 12) {
        const error = new Error("Invalid month provided");
        error.statusCode = 404;
        throw error;
      }

      pipeline.push({
        $match: {
          $expr: {
            $eq: [{ $month: "$clientData.dateOfMortgage" }, numericMonth],
          },
        },
      });
    }

    //joining agent collection

    pipeline.push({
      $lookup: {
        from: "agents",
        localField: "agent",
        foreignField: "_id",
        as: "agentData",
      },
    });

    pipeline.push({
      $unwind: "$agentData",
    });

    //Returning all matching noi + client info

    pipeline.push({
      $project: {
        _id: 1,
        status: 1,
        loanAmount: 1,
        challan03: 1,
        challan05: 1,
        dhc: 1,
        governmentCharges: 1,
        intimationCharges: 1,
        totalAmount: 1,

        agent: {
          _id: "$agentData._id",
          firstName: "$agentData.firstName",
          lastName: "$agentData.lastName",
        },

        client: {
          _id: "$clientData._id",
          prefix: "$clientData.prefix",
          firstName: "$clientData.firstName",
          middleName: "$clientData.middleName",
          lastName: "$clientData.lastName",
          email: "$clientData.email",
          mobileNumber: "$clientData.mobileNumber",
          propertyAddress: "$clientData.propertyAddress",
          dateOfMortgage: "$clientData.dateOfMortgage",
        },
      },
    });

    const records = await NoiSchema.aggregate(pipeline);
    console.log("Agent income records:", records);

    //calculation summary
    const summary = {
      totalClients: records.length,

      totalNois: records.length,

      completedNois: records.filter((record) => record.status === "Completed")
        .length,

      pendingNois: records.filter((record) => record.status === "Pending")
        .length,

      inProgressNois: records.filter(
        (record) => record.status === "In Progress",
      ).length,

      totalLoanAmount: records.reduce(
        (total, record) => total + (record.loanAmount || 0),
        0,
      ),

      total03Challan: records.reduce(
        (total, record) => total + (record.challan03 || 0),
        0,
      ),

      total05Challan: records.reduce(
        (total, record) => total + (record.challan05 || 0),
        0,
      ),

      totalDhc: records.reduce((total, record) => total + (record.dhc || 0), 0),

      totalGovernmentCharges: records
        .filter((record) => record.status === "Completed")
        .reduce((total, record) => total + (record.governmentCharges || 0), 0),

      totalIntimationIncome: records
        .filter((record) => record.status === "Completed")
        .reduce((total, record) => total + (record.intimationCharges || 0), 0),

      totalAmountCollected: records
        .filter((record) => record.status === "Completed")
        .reduce((total, record) => total + (record.totalAmount || 0), 0),
    };

    return {
      agentId: agentId || "all",
      year: year || "all",
      month: month || "all",
      summary,
      records,
    };
  } catch (error) {
    console.log("Get agent wise income error : ", error);
    throw error;
  }
}
