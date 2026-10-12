import express from "express";
import {
  createAgent,
  deleteAgentById,
  editAgentById,
  getAgentById,
  getAllAgent,
} from "../controllers/agentController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createAgent);
router.get("/", authMiddleware, getAllAgent);
router.get("/:id", authMiddleware, getAgentById);
router.put("/:id", authMiddleware, editAgentById);
router.delete("/:id" , authMiddleware , deleteAgentById);

export default router;
