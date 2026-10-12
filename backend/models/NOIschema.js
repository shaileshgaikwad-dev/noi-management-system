import mongoose from "mongoose";

const noiSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: [true, "Client is required"],
    },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      required: [true, "Agent required"],
    },
    loanAmount: {
      type: Number,
      required: [true, "Loan amount is required"],
      min: [1, "Loan amount must be positive number"],
    },
    challan03: {
      type: Number,
      required: true,
      min: 0,
    },
    challan05: {
      type: Number,
      required: true,
      min: 0,
    },
    dhc: {
      type: Number,
      required: true,
      default: 300,
    },
    governmentCharges: {
      type: Number,
      required: true,
      min: 0,
    },
    intimationCharges: {
      type: Number,
      required: true,
      min: [500, "Intimation charges must be greater than 500"],
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true },
);
noiSchema.index({ agent: 1 });
noiSchema.index({ client: 1 });
noiSchema.index({ status: 1 });
noiSchema.index({ status: 1, agent: 1 });
noiSchema.index({ createdAt: -1 });
noiSchema.index({ updatedAt: -1 });
const NoiSchema = mongoose.model("NoiSchema", noiSchema);
export default NoiSchema;
