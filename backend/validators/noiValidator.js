import { z } from "zod";

export const noiValidator = z.object({
  client: z.string().min(1, "Client is required"),

  agent: z.string().min(1, "Agent is required"),

  loanAmount: z.coerce
    .number("Loan amount required")
    .positive("Loan amount must be greater than 0"),

  intimationCharges: z.coerce
    .number("Intimation charges required")
    .min(500, "Intimation charges must be at least 500")
    .positive("Intimation charge must be greater than 500"),

  status: z
    .enum(["Pending", "In Progress", "Completed", "Cancelled"])
    .optional(),
});
