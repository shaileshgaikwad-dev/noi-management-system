import { z } from "zod";

export const editClientSchema = z.object({
  prefix: z.enum(["MR.", "MS.", "MRS.", "DR.", "PROF.", "REV."], {
    message: "Please select valid prefix",
  }),

  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, apostrophes, and hyphens",
    ),

  middleName: z
    .string()
    .trim()
    .max(50, "Middle name cannot exceed 50 characters")
    .regex(
      /^[a-zA-Z\s'-]*$/,
      "Middle name can only contain letters, spaces, apostrophes, and hyphens",
    )
    .optional()
    .or(z.literal("")),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, apostrophes, and hyphens",
    ),

  email: z.string().trim().email("Please enter a valid email").toLowerCase(),

  gender: z.enum(["MALE", "FEMALE", "TRANSGENDER"], {
    message: "Please select valid gender",
  }),

  mobileNumber: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),

  dateOfMortgage: z
    .string()
    .min(1, "Date of mortgage is required")
    .refine((value) => !isNaN(new Date(value).getTime()), {
      message: "Please provide a valid date of mortgage",
    })
    .refine((value) => new Date(value) <= new Date(), {
      message: "Date of mortgage cannot be in the future",
    }),

  propertyAddress: z
    .string()
    .trim()
    .toUpperCase()
    .min(5, "Property address must be at least 5 characters")
    .max(800, "Address cannot exceed 800 characters"),
});

export type EditClientData = z.infer<typeof editClientSchema>;
