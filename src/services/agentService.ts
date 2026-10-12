import type { IAgentCreate } from "../types/agent.types";
import type { EditAgentData } from "../schemas/editAgentSchema";
import { api } from "./api";

export async function getAllAgents() {
  try {
    const response = await api.get("/agents/");
    return response.data;
  } catch (error) {
    console.log("Error fetching agents : ", error);
    throw error;
  }
}

export async function createNewAgent(data: IAgentCreate) {
  try {
    const response = await api.post("/agents/", data);

    console.log("Agent created : ", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Error creating agent : ", error);
    throw error;
  }
}

export async function getAgentById(id: string) {
  try {
    const response = await api.get(`/agents/${id}`);
    return response.data;
  } catch (error: any) {
    console.log("Error get agent by id : ", error);
    throw error;
  }
}

export async function updateAgent(id: string, data: EditAgentData) {
  try {
    const response = await api.put(`/agents/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating agent:", error);
    throw error;
  }
}

export async function deleteAgent(id: string) {
  try {
    const response = await api.delete(`/agents/${id}`);

    return response.data;
  } catch (error) {
    console.log("Error deleting agent : ", error);
    throw error;
  }
}
