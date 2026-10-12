import express from "express";
import {
  enquiryController,
  getAllEnquiriesController,
  getEnquiryByIdController,
  updateEnquiryStatusController,
} from "../controllers/enquiryController.js";
import { validateEnquiry } from "../middleware/enquiryMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { enquiryRateLimiter } from "../middleware/enquiryRateLimiter.js";

const router = express.Router();

router.post("/", enquiryRateLimiter, validateEnquiry, enquiryController);
router.get("/all-enquiries", authMiddleware, getAllEnquiriesController);
router.get("/:id", authMiddleware, getEnquiryByIdController);
router.patch("/:id/status", authMiddleware, updateEnquiryStatusController);

export default router;
