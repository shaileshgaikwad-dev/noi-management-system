import { z } from "zod";

export const editNoiSchema = z.object({
  loanAmount: z.coerce
    .number("Loan amount is required")
    .min(1, "Loan amount must be greater than 0"),

  intimationCharges: z.coerce
    .number("Intimation charges required")
    .min(500, "Intimation charges cannot be less than 500"),

  agent: z.string().min(1, "Agent is required"),

  status: z.enum(["Pending", "In Progress", "Completed"]),
});

export type EditNoiData = z.infer<typeof editNoiSchema>;
