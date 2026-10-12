import { api } from "./api";

export async function dashboardServices() {
  try {
    const response = await api.get("/dashboard/status");

    return response.data;
  } catch (error) {
    console.log("Error is dashboard service : ", error);
    throw error;
  }
}

//recent activities

export async function recentActivitiesService() {
  try {
    const response = await api.get("/dashboard/recent-activities");

    return response.data;
  } catch (error) {
    console.log("Recent activities service error : ", error);
    throw error;
  }
}

//pending or in progress nois - clients

export async function pendingInProgressService() {
  try {
    const response = await api.get("/dashboard/pending-inprogress");

    return response.data;
  } catch (error) {
    console.log("Pending or In progress nois error : ", error);
    throw error;
  }
}
