import { api } from "./api";

export async function getIncomeReport(year: string) {
  try {
    const response = await api.get("/report/", { params: { year } });

    return response.data;
  } catch (error: any) {
    console.log("Error get income report service :", error);
    throw error;
  }
}

//monthly income report

export async function getMonthlyIncomeReport(year: number, month: number) {
  try {
    const response = await api.get("/report/month", {
      params: { year, month },
    });

    return response.data;
  } catch (error) {
    console.log("Error in get monthly income report service : ", error);
    throw error;
  }
}

//get income by agent

export async function getAgentWiseIncomeReportService(
  agentId: string | number,
  year: number | string,
  month: number | string,
) {
  try {
    const response = await api.get("/report/agent-income", {
      params: { agentId, year, month },
    });

    return response.data;
  } catch (error) {
    console.log("Error get agent wise income : ", error);
    throw error;
  }
}

//get monthly income trend service

export async function getMonthlyIncomeTrend(year: string | number) {
  try {
    const response = await api.get("/report/income-trend", {
      params: { year },
    });

    return response.data;
  } catch (error) {
    console.log("Error get income trend : ", error);
    throw error;
  }
}
