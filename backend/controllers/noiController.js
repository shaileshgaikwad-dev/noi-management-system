import {
  createNoiService,
  deleteNoiService,
  getAllNois,
  getNoiByClientId,
  getNoiById,
  updateNoiservice,
  updateNoiStatusService,
} from "../services/noiService.js";

export async function createNoiController(req, res) {
  try {
    const noi = await createNoiService(req.validatedNoiData);

    return res.status(201).json({
      success: true,
      message: "NOI created successfully",
      data: noi,
    });
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getAllNoiController(req, res) {
  try {
    const nois = await getAllNois();

    return res.status(200).json({
      success: true,
      message:
        nois.length === 0
          ? "No NOI records found"
          : "NOI records fetched successfully",
      count: nois.length,
      data: nois,
    });
  } catch (error) {
    console.log("Get all NOI controller error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching NOI records",
    });
  }
}

//get noi by id
export async function getNoiByIdController(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Noi id is required",
      });
    }

    const noi = await getNoiById(id);

    return res.status(200).json({
      success: true,
      message: "Noi fetched successfully",
      data: noi,
    });
  } catch (error) {
    console.log("Get NOI by id error:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.statusCode ? error.message : "Error fetching NOI",
    });
  }
}

export async function getNoiByClientIdController(req, res) {
  try {
    const { clientId } = req.params;

    if (!clientId) {
      return res
        .status(400)
        .json({ success: false, message: "CLient id is required" });
    }

    const noi = await getNoiByClientId(clientId);

    return res
      .status(200)
      .json({ success: true, message: "Noi fetched successfully", data: noi });
  } catch (error) {
    console.error("Get NOI by client id controller error:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.statusCode ? error.message : "Error fetching NOI",
    });
  }
}

//update noi controller
export async function updateNoiController(req, res) {
  try {
    const { id } = req.params;
    const updatedNoi = await updateNoiservice(id, req.body);

    return res.status(200).json({
      success: true,
      message: "NOI updated successfully",
      data: updatedNoi,
    });
  } catch (error) {
    console.log("Update NOI controller error:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.statusCode ? error.message : "Error updating NOI ",
    });
  }
}

//delete noi by id
export async function deleteNoiController(req, res) {
  try {
    const { id } = req.params;

    const deleteNoi = await deleteNoiService(id);
    return res.status(200).json({
      success: true,
      message: "NOI deleted successfully",
      data: deleteNoi,
    });
  } catch (error) {
    console.error("Delete NOI controller error:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.statusCode ? error.message : "Error deleting NOI",
    });
  }
}

//update noi status controller

export async function updateNoiStatusController(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    const updateNoi = await updateNoiStatusService(id, status);

    return res.status(200).json({
      success: true,
      message: "Noi status updated successfully",
      data: updateNoi,
    });
  } catch (error) {
    console.error("Update NOI status controller error:", error);
  }
}
