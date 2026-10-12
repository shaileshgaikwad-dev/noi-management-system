import { api } from "./api";

export async function createNoiService(data: {
  client: string;
  agent: string;
  loanAmount: number;
  intimationCharges: number;
  status: string;
}) {
  try {
    const response = await api.post("/noi/", data);

    return response.data;
  } catch (error) {
    console.log("Creating noi error : ", error);
    throw error;
  }
}

export async function getNoiByClientId(clientId: string) {
  try {
    const response = await api.get(`/noi/client/${clientId}`);

    return response.data;
  } catch (error) {
    console.log("Get NOI by client id error : ", error);
    throw error;
  }
}

export async function updateNoiService(
  id: string | undefined,
  data: {
    loanAmount: number;
    intimationCharges: number;
    status: string;
    agent: string;
  },
) {
  try {
    const response = await api.put(`/noi/${id}`, data);

    return response.data;
  } catch (error: any) {
    console.log("Update NOI error:", error);
    throw error;
  }
}
