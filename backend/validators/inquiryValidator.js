import { z } from "zod";

export const enquiryValidator = z.object({
  fullName: z
    .string()
    .trim()
    .toUpperCase()
    .min(5, "Full name must be at least 5 characters")
    .max(200, "Full name cannot exceed 200 characters"),

  email: z
    .string()
    .toLowerCase()
    .trim()
    .email("Please enter a valid email address"),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message cannot be more than 2000 characters"),
});

export default enquiryValidator;
