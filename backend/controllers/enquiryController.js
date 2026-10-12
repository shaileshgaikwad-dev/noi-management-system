import {
  createEnquiryService,
  getAllEnquiryService,
  getEnquiryByIdService,
  updateEnquiryStatusService,
} from "../services/enquiryService.js";

export async function enquiryController(req, res) {
  try {
    const enquiry = await createEnquiryService(req.body);

    if (!enquiry) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    return res.status(201).json({
      success: true,
      message:
        "Thank you for your enquiry. Our team will get back to you shortly.",
      data: enquiry,
    });
  } catch (error) {
    console.log("Create enquiry controller error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
    });
  }
}

//get all enquiries controller

export async function getAllEnquiriesController(req, res) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 1;
    const status = req.query.status || "All";

    const result = await getAllEnquiryService(page, limit, status);

    if (result.enquiries.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No enquiries found", data: result });
    }

    return res
      .status(201)
      .json({ success: true, message: "Enquiries fetched", data: result });
  } catch (error) {
    console.log("Get enquiries controller error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
    });
  }
}

//get enquiry by id controller

export async function getEnquiryByIdController(req, res) {
  try {
    const { id } = req.params;

    const enquiry = await getEnquiryByIdService(id);

    if (!enquiry) {
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry fetched successfully",
      data: enquiry,
    });
  } catch (error) {
    console.log("Get enquiry by id controller error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiry",
    });
  }
}

//updating enquiry status

export async function updateEnquiryStatusController(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const enquiry = await updateEnquiryStatusService(id, status);

    return res.status(200).json({
      success: true,
      message: "Enquiry status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.log("Update enquiry status controller error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update enquiry status",
    });
  }
}
