import Agent from "../models/AgentSchema.js";
import { agentRegistration } from "../utils/agentRegistration.js";
import { formatName } from "../utils/formatName.js";
import mongoose from "mongoose";

export async function createAgent(req, res) {
  try {
    const { firstName, lastName, email, mobileNumber, officeAddress } =
      req.body;

    if (!firstName || !lastName || !email || !mobileNumber || !officeAddress) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const existingEmail = await Agent.findOne({
      email: email.toLowerCase().trim(),
    });

    //check if email already exists
    if (existingEmail) {
      return res
        .status(409)
        .json({ success: false, message: "Email already exists" });
    }

    //checking if mobile number already exists
    const existingMobile = await Agent.findOne({
      mobileNumber: mobileNumber.trim(),
    });

    if (existingMobile) {
      return res
        .status(409)
        .json({ success: false, message: "Mobile number already exists" });
    }

    const agent = new Agent({
      firstName: formatName(firstName).trim(),
      lastName: formatName(lastName).trim(),
      email: email.toLowerCase().trim(),
      mobileNumber: mobileNumber.trim(),
      officeAddress: officeAddress.trim(),
    });

    await agent.save();

    agentRegistration(agent);

    return res
      .status(201)
      .json({ success: true, message: "New agent created", data: agent });
  } catch (error) {
    console.log("Create agent error : ", error);
    return res
      .status(500)
      .json({ success: false, message: "Error creating agent" });
  }
}

// Get all agent

export async function getAllAgent(req, res) {
  try {
    const agent = await Agent.find().sort({ firstName: 1, lastName: 1 }).lean();

    if (!agent || agent.length === 0) {
      return res.status(200).json({ message: "No agents found" });
    }

    return res.status(200).json({
      message: "Agents fetch successfully",
      count: agent.length,
      data: agent,
    });
  } catch (error) {
    console.log(`Error in get all agents : `, error);
    return res.status(500).json({ message: error.message });
  }
}

//get agent by id
export async function getAgentById(req, res) {
  try {
    const { id } = req.params;

    //checking if id not valid
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Agent id is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid agent id",
      });
    }

    // Finding agent by id
    const agent = await Agent.findById(id);

    if (!agent) {
      return res.status(404).json({
        success: false,
        message: "Agent not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Agent fetched successfully",
      data: agent,
    });
  } catch (error) {
    console.error("Error in get agent by Id:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching agent",
      error: error.message,
    });
  }
}

//edit agent by id

export async function editAgentById(req, res) {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, mobileNumber, officeAddress } =
      req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid agent id" });
    }

    if (!id) {
      return res.status(400).json({
        message: "Agent id required",
      });
    }

    //checking email if used by other agent
    if (email) {
      const normalizedEmail = email.toLowerCase().trim();

      const existEmail = await Agent.findOne({
        email: normalizedEmail,
        _id: { $ne: id },
      });

      if (existEmail) {
        return res
          .status(409)
          .json({ message: "Email already in use by another agent" });
      }
    }

    //checking mobile number if used by other agent

    if (mobileNumber) {
      const normalizedMobile = mobileNumber.trim();

      const existsMobile = await Agent.findOne({
        mobileNumber: normalizedMobile,
        _id: { $ne: id },
      });

      if (existsMobile) {
        return res.status(409).json({
          message: "Mobile number already in use by another agent",
        });
      }
    }

    const updateAgent = await Agent.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        mobileNumber,
        officeAddress,
      },
      { returnDocument: "after", runValidators: true },
    );

    return res
      .status(200)
      .json({ message: "Agent data updated", data: updateAgent });
  } catch (error) {
    console.log("Agent error in edit : ", error);
    return res.status(500).json({ message: error.message });
  }
}

//delete agent

export async function deleteAgentById(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Agent id is required" });
    }

    const response = await Agent.findByIdAndDelete(id);

    if (!response) {
      return res
        .status(404)
        .json({ success: false, message: "Agent not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Agent deleted", data: response });
  } catch (error) {
    console.log("Deleting agent error : ", error);
    return res.status(500).json({
      success: false,
      message: "Error deleting agent",
    });
  }
}
