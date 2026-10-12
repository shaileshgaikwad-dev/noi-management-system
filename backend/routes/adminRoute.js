import express from "express";
import { loginAdmin } from "../controllers/adminLoginController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { loginRateLimiter } from "../middleware/loginRateLimiter.js";

const router = express.Router();

router.post("/", loginRateLimiter, loginAdmin);
router.get("/dashboard", authMiddleware, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Admin Dashboard",
    admin: req.admin,
  });
});

export default router;
