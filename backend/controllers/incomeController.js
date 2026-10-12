import { agentWiseIncomeService } from "../services/agentIncomeService.js";
import {
  getMonthlyIncomeReport,
  getMonthlyIncomeTrendService,
} from "../services/monthlyIncomeService.js";
import { getIncomeReport } from "../services/yearlyIncomeService.js";

export async function getIncomeReportController(req, res) {
  try {
    const { year } = req.query;

    const report = await getIncomeReport(year);

    res
      .status(200)
      .json({ success: true, message: "Income report fetched", data: report });
  } catch (error) {
    console.log("Get income report controller error", error);
    throw error;
  }
}

//monthly report

export async function getMonthlyIncomeController(req, res) {
  try {
    const { year, month } = req.query;

    const monthlyReport = await getMonthlyIncomeReport(year, month);

    res.status(200).json({
      success: true,
      message: "Monthly income report fetched",
      data: monthlyReport,
    });
  } catch (error) {
    console.log("Get monthly income controller error : ", error);
    throw error;
  }
}

//get income by agent

export async function getAgentIncomeController(req, res) {
  try {
    const { agentId, year, month } = req.query;

    const response = await agentWiseIncomeService(agentId, year, month);

    res.status(200).json({
      success: true,
      message: "Agent income report fetched",
      data: response,
    });
  } catch (error) {
    console.log("Get agent income report controller error:", error);
    throw error;
  }
}

//monthly trend controller

export async function getMonthlyIncomeTrendController(req, res) {
  try {
    const { year } = req.query;
    const trend = await getMonthlyIncomeTrendService(year);

    return res.status(200).json({
      success: true,
      message: "Monthly income trend fetched",
      data: trend,
    });
  } catch (error) {
    console.log("Get monthly income trend controller error:", error);
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.statusCode
        ? error.message
        : "Failed to fetch income trend",
    });
  }
}
