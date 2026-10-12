import express from "express";
import {
  createClient,
  deleteClientController,
  getAllClient,
  getClientByIdController,
  getClientsByAgentThisMonthController,
  updateClientController,
} from "../controllers/clientController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateClient } from "../middleware/clientMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, validateClient, createClient);
router.get("/", authMiddleware, getAllClient);
router.get("/:id", authMiddleware, getClientByIdController);
router.put("/:id", authMiddleware, validateClient, updateClientController);
router.get(
  "/by-agent/year-month",
  authMiddleware,
  getClientsByAgentThisMonthController,
);
router.delete("/:id", authMiddleware, deleteClientController);

export default router;
