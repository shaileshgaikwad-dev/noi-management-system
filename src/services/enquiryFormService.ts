import type { IEnquiries } from "../types/enquiry.types";
import { api } from "./api";

export async function createEnquiryService(data: IEnquiries) {
  try {
    const response = await api.post("/enquiries/", data);

    return response.data;
  } catch (error) {
    console.log("Error creating enquiry");
    throw error;
  }
}

//get all enquiries

export async function getAllEnquiriesService(params = {}) {
  try {
    const response = await api.get("/enquiries/all-enquiries", { params });

    return response.data;
  } catch (error) {
    console.log("Error creating enquiry");
    throw error;
  }
}

//get enquiry by id

export async function getEnquiryByIdService(id: string) {
  try {
    const response = await api.get(`/enquiries/${id}`);

    return response.data;
  } catch (error) {
    console.error("Get enquiry by id error:", error);
    throw error;
  }
}

//updating status

export async function updateEnquiryStatus(
  id: string,
  status: IEnquiries["status"],
) {
  try {
    const response = await api.patch(`/enquiries/${id}/status`, { status });

    return response.data;
  } catch (error) {
    console.error("Update enquiry by id error:", error);
    throw error;
  }
}
