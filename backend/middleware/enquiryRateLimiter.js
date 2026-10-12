import rateLimit from "express-rate-limit";

export const enquiryRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,

  message: {
    success: false,
    message: "Too many requests. Please try again later after 5 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
