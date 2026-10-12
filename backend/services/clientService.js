import mongoose from "mongoose";
import Agent from "../models/AgentSchema.js";
import Client from "../models/ClientSchema.js";

export async function createClientService(clientData) {
  try {
    const {
      prefix,
      firstName,
      middleName,
      lastName,
      gender,
      propertyAddress,
      email,
      mobileNumber,
      agent,
      dateOfMortgage,
    } = clientData;

    //checking weather selected agent is exists

    const existingAgent = await Agent.findById(agent);

    if (!existingAgent) {
      const error = new Error("Selected agent not found");
      error.statusCode = 404;
      throw error;
    }

    //creating client

    const client = new Client({
      prefix,
      firstName,
      middleName,
      lastName,
      gender,
      propertyAddress,
      email: email.toLowerCase().trim(),
      mobileNumber: mobileNumber.trim(),
      agent,
      dateOfMortgage,
    });

    await client.save();
    console.log("New client created");
    return client;
  } catch (error) {
    console.log("Create client service error : ", error);
    throw error;
  }
}

export async function getAllClients({
  page = 1,
  limit = 15,
  search = "",
  year,
  agent,
}) {
  try {
    const skip = (page - 1) * limit;

    //MongoDB filter
    const filter = {};

    //search
    if (search.trim()) {
      filter.$or = [
        { firstName: { $regex: search.trim(), $options: "i" } },
        { lastName: { $regex: search.trim(), $options: "i" } },
        { email: { $regex: search.trim(), $options: "i" } },
        { mobileNumber: { $regex: search.trim(), $options: "i" } },
      ];
    }

    //agent filter
    if (agent) {
      filter.agent = agent;
    }

    //year filter
    if (year && year !== "all") {
      const startDate = new Date(`${year}-01-01T00:00:00.000Z`);

      const endDate = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);

      filter.dateOfMortgage = {
        $gte: startDate,
        $lt: endDate,
      };
    }

    //get total matching records

    const totalRecords = await Client.countDocuments(filter);

    //get paginated clients
    const clients = await Client.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalPages = Math.ceil(totalRecords / limit);

    return {
      clients,
      pagination: {
        totalRecords,
        currentPage: page,
        totalPages,
        limit,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  } catch (error) {
    console.log("Fetching all clients error : ", error);
    throw error;
  }
}

export async function getClientById(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const invalidIdError = new Error("Invalid client id");
      invalidIdError.statusCode = 400;
      throw invalidIdError;
    }

    const client = await Client.findById(id)
      .populate("agent", "firstName lastName")
      .lean();

    if (!client) {
      const notFoundError = new Error("Client not found");
      notFoundError.statusCode = 404;
      throw notFoundError;
    }
    return client;
  } catch (error) {
    console.log("Error fetching client by id : ", error);
    throw error;
  }
}

//updating client

export async function updateClient(id, clientData) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const invalidIdError = new Error("Invalid Id");
      invalidIdError.statusCode = 400;
      throw invalidIdError;
    }

    //checking weather existing client
    const existingCLient = await Client.findById(id);

    if (!existingCLient) {
      const notFoundError = new Error("Client not found");
      notFoundError.statusCode = 404;
      throw notFoundError;
    }

    //check selected agent exists

    if (clientData.agent) {
      const existingAgent = await Agent.findById(clientData.agent);

      if (!existingAgent) {
        const agentError = new Error("Selected agent not found");
        agentError.statusCode = 404;
        throw agentError;
      }
    }
    //updating data
    const updatedClient = await Client.findByIdAndUpdate(id, clientData, {
      returnDocument: "after",
      runValidators: true,
    }).lean();

    return updatedClient;
  } catch (error) {
    throw error;
  }
}

//deleting client by id

export async function deleteClient(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const deleteIdError = new Error("Invalid id");
      deleteIdError.statusCode = 404;
      throw deleteIdError;
    }

    const deletedClient = await Client.findByIdAndDelete(id);
    if (!deletedClient) {
      const notFoundError = new Error("Client not found");
      notFoundError.statusCode = 404;
      throw notFoundError;
    }

    return deletedClient;
  } catch (error) {
    throw error;
  }
}

// Get clients by agent this month

export async function getClientsByAgentsThisMonth(year, month) {
  try {
    const now = new Date();

    const numericYear = year ? Number(year) : now.getFullYear();
    const numericMonth = month ? Number(month) : now.getMonth() + 1;

    if (!Number.isInteger(numericYear) || numericYear < 2019) {
      const error = new Error("Invalid year");
      error.statusCode = 400;
      throw error;
    }

    if (
      !Number.isInteger(numericMonth) ||
      numericMonth < 1 ||
      numericMonth > 12
    ) {
      const error = new Error("Invalid month");
      error.statusCode = 400;
      throw error;
    }

    const startOfMonth = new Date(numericYear, numericMonth - 1, 1);
    const startOfNextMonth = new Date(numericYear, numericMonth, 1);

    const pipeline = [
      {
        $match: {
          dateOfMortgage: { $gte: startOfMonth, $lt: startOfNextMonth },
        },
      },
      {
        $lookup: {
          from: "agents",
          localField: "agent",
          foreignField: "_id",
          as: "agentData",
        },
      },
      {
        $unwind: "$agentData",
      },
      {
        $group: {
          _id: "$agent",
          agentFirstName: { $first: "$agentData.firstName" },
          agentLastName: { $last: "$agentData.lastName" },
          totalClients: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          agentId: "$_id",
          agentName: { $concat: ["$agentFirstName", " ", "$agentLastName"] },
          totalClients: 1,
        },
      },
      {
        $sort: { totalClients: -1 },
      },
    ];

    const result = await Client.aggregate(pipeline);
    return {
      year: numericYear,
      month: numericMonth,
      agents: result,
    };
  } catch (error) {
    console.log("Get clients by agent this month error:", error);
    throw error;
  }
}
