import Enquiry from "../models/EnquirySchema.js";
import mongoose from "mongoose";

export async function createEnquiryService(enquiryData) {
  try {
    const { fullName, email, mobile, message } = enquiryData;

    const enquiry = new Enquiry({
      fullName,
      email,
      mobile,
      message,
    });

    await enquiry.save();

    return enquiry;
  } catch (error) {
    console.log("Create enquiry service error:", error);
    throw error;
  }
}

//get all enquiries

export async function getAllEnquiryService(
  page = 1,
  limit = 20,
  status = "All",
) {
  try {
    const skip = (page - 1) * limit;

    const query = status === "All" ? {} : { status };

    const [enquiries, totalEnquiries] = await Promise.all([
      Enquiry.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),

      Enquiry.countDocuments(query),
    ]);

    return {
      enquiries,
      pagination: {
        currentPage: page,
        limit,
        totalEnquiries,
        totalPages: Math.ceil(totalEnquiries / limit),
      },
    };
  } catch (error) {
    console.log("Get enquiries service error:", error);
    throw error;
  }
}

//get enquiries by id

export async function getEnquiryByIdService(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid enquiry id");
      error.statusCode = 400;
      throw error;
    }

    const enquiry = await Enquiry.findById(id).lean();

    if (!enquiry) {
      const error = new Error("Enquiry not found");
      error.statusCode = 404;
      throw error;
    }

    return enquiry;
  } catch (error) {
    console.log("Get enquiry by id service error:", error);
    throw error;
  }
}

//update enquiry status

export async function updateEnquiryStatusService(id, status) {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      id,
      { status },
      { returnDocument: "after", runValidators: true },
    ).lean();

    if (!enquiry) {
      const error = new Error("Enquiry not found");
      error.statusCode = 404;
      throw error;
    }

    return enquiry;
  } catch (error) {
    console.log("Update enquiry status service error:", error);
    throw error;
  }
}
