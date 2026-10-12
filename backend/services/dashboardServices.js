import Agent from "../models/AgentSchema.js";
import Client from "../models/ClientSchema.js";
import NoiSchema from "../models/NOIschema.js";

export async function getDashboardStatus() {
  const now = new Date();

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const [
    totalAgents,
    totalClients,
    totalNois,
    pendingNois,
    completedNois,
    monthlyIncomeResult,
    yearlyIncomeResult,
  ] = await Promise.all([
    Agent.countDocuments(),
    Client.countDocuments(),

    NoiSchema.countDocuments(),

    NoiSchema.countDocuments({
      status: { $in: ["Pending", "In Progress"] },
    }),

    NoiSchema.countDocuments({
      status: "Completed",
    }),

    NoiSchema.aggregate([
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
            $and: [
              {
                $eq: [
                  {
                    $year: "$clientData.dateOfMortgage",
                  },
                  currentYear,
                ],
              },
              {
                $eq: [
                  {
                    $month: "$clientData.dateOfMortgage",
                  },
                  currentMonth,
                ],
              },
            ],
          },
        },
      },
      {
        $group: {
          _id: null,
          income: {
            $sum: "$intimationCharges",
          },
        },
      },
    ]),

    NoiSchema.aggregate([
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
            $eq: [
              {
                $year: "$clientData.dateOfMortgage",
              },
              currentYear,
            ],
          },
        },
      },

      {
        $group: {
          _id: null,
          income: {
            $sum: "$intimationCharges",
          },
        },
      },
    ]),
  ]);

  return {
    totalAgents,
    totalClients,
    totalNois,
    pendingNois,
    completedNois,
    monthlyIncome: monthlyIncomeResult[0]?.income || 0,
    yearlyIncome: yearlyIncomeResult[0]?.income || 0,
  };
}

//recent activities

export async function recentActivitiesService() {
  try {
    const activities = await NoiSchema.find()
      .sort({ updatedAt: -1 })
      .limit(10)
      .populate("agent", "firstName lastName")
      .populate("client", "firstName middleName lastName")
      .select("client agent status createdAt updatedAt")
      .lean();

    return activities;
  } catch (error) {
    console.log("recent activities service error : ", error);
  }
}

//in progress or pending clients and nois

export async function pendingInProgressService() {
  try {
    const activities = await NoiSchema.find({
      status: { $in: ["Pending", "In Progress"] },
    })
      .sort({ updatedAt: -1 })
      .limit(100)
      .populate("agent", "firstName lastName")
      .populate("client", "firstName middleName lastName")
      .select("client status createdAt updatedAt")
      .lean();

    return activities;
  } catch (error) {
    console.log("Pending or In Progress service error : ", error);
    throw error;
  }
}
