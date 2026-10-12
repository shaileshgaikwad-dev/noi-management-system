import type { ICreateClientRequest } from "../types/client.types";
import { api } from "./api";

export async function getAllClients(params = {}) {
  try {
    const response = await api.get("/clients/", { params });
    return response.data;
  } catch (error) {
    console.log("Fetching all clients error : ", error);
    throw error;
  }
}

export async function createClient(data: ICreateClientRequest) {
  try {
    const response = await api.post("/clients/", data);
    return response.data;
  } catch (error) {
    console.log("Error creating new client : ", error);
    throw error;
  }
}

export async function getClientById(id: string) {
  try {
    const response = await api.get(`/clients/${id}`);
    return response.data;
  } catch (error) {
    console.log("Get client by id error : ", error);
    throw error;
  }
}

export async function updateClient(id: string, data: ICreateClientRequest) {
  try {
    const response = await api.put(`/clients/${id}`, data);

    return response.data;
  } catch (error) {
    console.log("Update client error : ", error);
    throw error;
  }
}

// get clients by agents current months

export async function getClientByAgentsThisMonth(year: number, month: number) {
  try {
    const response = await api.get("/clients/by-agent/year-month", {
      params: { year, month },
    });
    return response.data;
  } catch (error) {
    console.log("Update client error : ", error);
    throw error;
  }
}
