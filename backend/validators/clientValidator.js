import { z } from "zod";
import mongoose from "mongoose";

export const clientValidator = z.object({
  prefix: z.enum(["MR.", "MS.", "MRS.", "DR.", "PROF.", "REV."], {
    message: "Please select a valid prefix",
  }),

  firstName: z
    .string()
    .trim()
    .toUpperCase()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters"),

  middleName: z
    .string()
    .trim()
    .toUpperCase()
    .max(50, "Middle name cannot be exceed 50 characters")
    .optional()
    .or(z.literal("")),
  lastName: z
    .string()
    .trim()
    .toUpperCase()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters"),

  gender: z.enum(["MALE", "FEMALE", "TRANSGENDER"], {
    message: "Please select a valid gender",
  }),

  propertyAddress: z
    .string()
    .trim()
    .toUpperCase()
    .min(5, "Property address is required")
    .max(500, "Address cannot exceed 500 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .toLowerCase(),

  mobileNumber: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),

  agent: z
    .string()
    .refine(
      (value) => mongoose.Types.ObjectId.isValid(value),
      "Invalid agent id",
    ),

  dateOfMortgage: z.coerce.date({
    message: "Please provide a valid date of mortgage",
  }).max(new Date() , "Date of mortgage cannot be in the future"),
});

export default clientValidator;
