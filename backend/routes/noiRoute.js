import express from "express";
import {
  createNoiController,
  deleteNoiController,
  getAllNoiController,
  getNoiByClientIdController,
  getNoiByIdController,
  updateNoiController,
  updateNoiStatusController,
} from "../controllers/noiController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateNoi } from "../middleware/noiMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, validateNoi, createNoiController);
router.get("/", authMiddleware, getAllNoiController);
router.get("/client/:clientId", authMiddleware, getNoiByClientIdController);
router.get("/:id", authMiddleware, getNoiByIdController);
router.put("/:id", authMiddleware, updateNoiController);
router.delete("/:id", authMiddleware, deleteNoiController);
router.patch(
  "/:id/status",
  authMiddleware,
  validateNoi,
  updateNoiStatusController,
);

export default router;
