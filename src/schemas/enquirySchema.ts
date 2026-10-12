import { z } from "zod";

export const createEnquirySchema = z.object({
  fullName: z
    .string("Full name is required")
    .trim()
    .min(2, "Full name is required")
    .max(50, "Full name cannot exceed 50 characters")
    .toUpperCase()
    .regex(/^[a-zA-Z\s'-]+$/, "Full name can only contain letters, spaces"),

  email: z
    .string("Email is required")
    .trim()
    .email("Please enter a valid email")
    .toLowerCase(),

  mobile: z
    .string("Mobile number is required")
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  message: z
    .string("Message is required")
    .trim()
    .min(5, "Message must contain 5 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
});

export type EnquiryFormData = z.infer<typeof createEnquirySchema>;
