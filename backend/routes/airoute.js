import express from "express";
import { askAiController } from "../controllers/aicontroller.js";
import { aiRateLimiter } from "../middleware/aiRateLimiter.js";

const router = express.Router();

router.post("/ask", aiRateLimiter, askAiController);

export default router;
