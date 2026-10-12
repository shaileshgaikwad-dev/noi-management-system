import mongoose from "mongoose";
import Client from "../models/ClientSchema.js";
import Agent from "../models/AgentSchema.js";
import NoiSchema from "../models/NOIschema.js";
import { calculateChallanService } from "./calculationService.js";
import { sendClientBillEmail } from "../utils/clientBillEmail.js";
import { sendStatusUpdateEmail } from "./sttausEmailService.js";

export async function createNoiService(noiData) {
  try {
    const { client, agent, loanAmount, intimationCharges, status } = noiData;

    //check client exists
    const existingClient = await Client.findById(client);

    if (!existingClient) {
      const clientError = new Error("Client not found");
      clientError.statusCode = 404;
      throw clientError;
    }

    //check agent exists

    const existingAgent = await Agent.findById(agent);

    if (!existingAgent) {
      const agentError = new Error("Agent not found");
      agentError.statusCode = 404;
      throw agentError;
    }

    const calculation = calculateChallanService(loanAmount, intimationCharges);

    const noi = new NoiSchema({
      client,
      agent,
      loanAmount,
      challan03: calculation.challan03,
      challan05: calculation.challan05,
      dhc: calculation.dhc,
      governmentCharges: calculation.governmentCharges,
      intimationCharges: Number(intimationCharges),
      totalAmount: calculation.totalAmount,
      status,
    });

    //save noi
    await noi.save();

    //sending email
    sendClientBillEmail(existingAgent, existingClient, noi);

    //populated noi
    const populatedNoi = await NoiSchema.findById(noi._id)
      .populate("client", "firstName lastName email mobileNumber")
      .populate("agent", "firstName lastName email mobileNumber");
    return populatedNoi;
  } catch (error) {
    console.log("Create NOI service error:", error);
    throw error;
  }
}

//get all nois

export async function getAllNois() {
  try {
    const nois = await NoiSchema.find().populate("client").populate("agent");

    return nois;
  } catch (error) {
    console.log("Get all nois error :", error);
    throw error;
  }
}

//get noi by id

export async function getNoiById(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const invalidIdError = new Error("Invalid NOI id");
      invalidIdError.statusCode = 400;
      throw invalidIdError;
    }
    const noi = await NoiSchema.findById(id)
      .populate("client")
      .populate("agent")
      .lean();

    if (!noi) {
      const notFoundError = new Error("NOI not found");
      notFoundError.statusCode = 404;
      throw notFoundError;
    }

    return noi;
  } catch (error) {
    console.log("get noi by id error : ", error);
    throw error;
  }
}

export async function getNoiByClientId(clientId) {
  try {
    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      const error = new Error("Invalid client id");
      error.statusCode = 404;
      throw error;
    }

    const noi = await NoiSchema.findOne({ client: clientId })
      .populate("client")
      .populate("agent")
      .lean();

    if (!noi) {
      const error = new Error("NOI not found for this client");
      error.statusCode = 404;
      throw error;
    }

    return noi;
  } catch (error) {
    console.error("Get NOI by client id service error:", error);
    throw error;
  }
}

//update noi service

export async function updateNoiservice(id, noiData) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const invalidIdError = new Error("Invalid NOI id");
      invalidIdError.statusCode = 400;
      throw invalidIdError;
    }

    const existingNoi = await NoiSchema.findById(id);

    if (!existingNoi) {
      const notFoundError = new Error("NOI not found");
      notFoundError.statusCode = 404;
      throw notFoundError;
    }

    if (noiData.agent) {
      const existingAgent = await Agent.findById(noiData.agent);

      if (!existingAgent) {
        const agentError = new Error("Selected agent not found");
        agentError.statusCode = 404;
        throw agentError;
      }
    }

    // 5. Use new loan amount if provided,
    // otherwise use existing loan amount
    const loanAmount =
      noiData.loanAmount !== undefined
        ? Number(noiData.loanAmount)
        : existingNoi.loanAmount;

    // 6. recalculating intimation charges
    const intimationCharges =
      noiData.intimationCharges !== undefined
        ? Number(noiData.intimationCharges)
        : existingNoi.intimationCharges;

    // 6. Recalculate government charges
    const calculation = calculateChallanService(loanAmount, intimationCharges);

    const governmentCharges =
      calculation.challan03 + calculation.challan05 + calculation.dhc;

    // 8. Calculate total amount
    const totalAmount = governmentCharges + intimationCharges;

    // 9. Update NOI
    const updatedNoi = await NoiSchema.findByIdAndUpdate(
      id,
      {
        ...noiData,
        loanAmount,
        challan03: calculation.challan03,
        challan05: calculation.challan05,
        dhc: calculation.dhc,
        governmentCharges: calculation.governmentCharges,
        intimationCharges,
        totalAmount: totalAmount,
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    )
      .populate("client")
      .populate("agent")
      .lean();

    //sending update email

    const statusChanged = existingNoi.status !== updatedNoi.status;

    if (statusChanged) {
      sendStatusUpdateEmail(updatedNoi.client, updatedNoi.agent, updatedNoi);
    }

    return updatedNoi;
  } catch (error) {
    console.error("Update NOI service error:", error);
    throw error;
  }
}

//delete noi

export async function deleteNoiService(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const invalidIdError = new Error("Invalid NOI id");
      invalidIdError.statusCode = 400;
      throw invalidIdError;
    }

    const existingNoi = await NoiSchema.findById(id);

    if (!existingNoi) {
      const notFoundError = new Error("NOI not found");
      notFoundError.statusCode = 404;
      throw notFoundError;
    }

    await NoiSchema.findByIdAndDelete(id);

    return existingNoi;
  } catch (error) {
    console.error("Delete NOI service error:", error);
    throw error;
  }
}

//update noi status

export async function updateNoiStatusService(id, status) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const invalidIdError = new Error("Invalid NOI id");
      invalidIdError.statusCode = 400;
      throw invalidIdError;
    }

    //check noi exists or not
    const existingNoi = await NoiSchema.findById(id);

    if (!existingNoi) {
      const notFoundError = new Error("NOI not found");
      notFoundError.statusCode = 404;
      throw notFoundError;
    }

    const allowedStatuses = [
      "Pending",
      "In Progress",
      "Completed",
      "Cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      const statusError = new Error("Invalid NOI status");
      statusError.statusCode = 400;
      throw statusError;
    }

    //set completion date

    //updating status

    const updatedNoi = await NoiSchema.findByIdAndUpdate(
      id,
      {
        status,
      },
      { returnDocument: "after", runValidators: true },
    )
      .populate("client")
      .populate("agent")
      .lean();

    return updatedNoi;
  } catch (error) {
    console.error("Update NOI status service error:", error);
    throw error;
  }
}
