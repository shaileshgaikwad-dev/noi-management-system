import {
  createClientService,
  deleteClient,
  getClientById,
  getClientsByAgentsThisMonth,
  updateClient,
} from "../services/clientService.js";
import { getAllClients } from "../services/clientService.js";

//creating client
export async function createClient(req, res) {
  try {
    const client = await createClientService(req.validatedData);

    return res.status(201).json({
      success: true,
      message: "Client created successfully",
      data: client,
    });
  } catch (error) {
    console.log("Create client error : ", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getAllClient(req, res) {
  try {
    const {
      page = 1,
      limit = 15,
      search = "",
      year = "all",
      agent,
    } = req.query;

    const clients = await getAllClients({
      page: Number(page),
      limit: Number(limit),
      search,
      year,
      agent,
    });

    if (!clients) {
      return res
        .status(400)
        .json({ success: false, message: "No clients found" });
    }

    return res.status(200).json({
      success: true,
      message:
        clients.length === 0
          ? "No clients found"
          : "Clients fetched successfully",
      count: clients.length,
      data: clients,
      pagination: clients.pagination,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error fetching clients" });
  }
}

export async function getClientByIdController(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Client id is required",
      });
    }

    const client = await getClientById(id);

    return res.status(200).json({
      success: true,
      message: "Client fetched successfully",
      data: client,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Get client by id error : ",
      error,
    });
  }
}

export async function updateClientController(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Invalid id",
      });
    }

    const updatedClient = await updateClient(id, req.body);

    return res.status(200).json({
      success: true,
      message: "Client data updated",
      data: updatedClient,
    });
  } catch (error) {
    console.error("Update client error:", error.message);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Error updating client",
    });
  }
}

//delete client

export async function deleteClientController(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Client not found or invalid client id",
      });
    }

    await deleteClient(id);

    res.status(200).json({ success: true, message: "Client deleted" });
  } catch (error) {
    console.error("Delete client error:", error.message);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Error deleting client",
    });
  }
}

//getClientsByAgentThisMonthController controller

export async function getClientsByAgentThisMonthController(req, res) {
  try {
    const { year, month } = req.query;

    const data = await getClientsByAgentsThisMonth(year, month);

    return res.status(200).json({
      success: true,
      message: "Fetch ",
      data,
    });
  } catch (error) {
    console.log("Controller error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch" });
  }
}
