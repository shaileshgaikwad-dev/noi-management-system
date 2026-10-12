import mongoose from "mongoose";

const clientSchema = mongoose.Schema(
  {
    prefix: {
      type: String,
      required: [true, "Prefix is required"],
      trim: true,
      enum: ["MR.", "MS.", "MRS.", "DR.", "PROF.", "REV."],
    },
    firstName: {
      type: String,
      required: [true, "First name required"],
      trim: true,
      uppercase: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    middleName: {
      type: String,
      default: "",
      uppercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      uppercase: true,
      required: [true, "Last name required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    gender: {
      type: String,
      trim: true,
      uppercase: true,
      enum: ["MALE", "FEMALE", "TRANSGENDER"],
      required: [true, "Gender is required"],
    },
    propertyAddress: {
      type: String,
      required: [true, "Property address required"],
      trim: true,
      uppercase: true,
      maxlength: [500, "Address cannot exceed 500 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number required"],
      trim: true,
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"],
    },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      required: [true, "Agent is required"],
    },
    dateOfMortgage: {
      type: Date,
      required: [true, "Date of mortgage is required"],
    },
  },
  { timestamps: true },
);
clientSchema.index({ dateOfMortgage: 1 });
clientSchema.index({ agent: 1 });
clientSchema.index({ email: 1 });
clientSchema.index({ mobileNumber: 1 });
clientSchema.index({ firstName: 1, lastName: 1 });
clientSchema.index({ createdAt: -1 });
const Client = mongoose.model("Client", clientSchema);
export default Client;
