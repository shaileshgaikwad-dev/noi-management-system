import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getAgentIncomeController,
  getIncomeReportController,
  getMonthlyIncomeController,
  getMonthlyIncomeTrendController,
} from "../controllers/incomeController.js";

const router = express.Router();

router.get("/", authMiddleware, getIncomeReportController);
router.get("/month", authMiddleware, getMonthlyIncomeController);
router.get("/agent-income", authMiddleware, getAgentIncomeController);
router.get("/income-trend", authMiddleware, getMonthlyIncomeTrendController);

export default router;
