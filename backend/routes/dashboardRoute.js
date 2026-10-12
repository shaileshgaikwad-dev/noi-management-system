import express from "express";
import {
  dashboardStatusController,
  pendingInProgressController,
  recentActivitiesController,
} from "../controllers/dashboardController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/status", authMiddleware, dashboardStatusController);
router.get("/recent-activities", authMiddleware, recentActivitiesController);
router.get("/pending-inprogress", authMiddleware, pendingInProgressController);

export default router;
