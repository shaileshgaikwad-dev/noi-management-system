import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      uppercase: true,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters long"],
      maxlength: [50, "First name cannot exceed 50 characters"],
      match: [
        /^[a-zA-Z\s'-]+$/,
        "First name can only contain letters, spaces, apostrophes, and hyphens",
      ],
    },
    lastName: {
      type: String,
      uppercase: true,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters long"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
      match: [
        /^[a-zA-Z\s'-]+$/,
        "Last name can only contain letters, spaces, apostrophes, and hyphens",
      ],
    },

    email: {
      required: [true, "Email address is required"],
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
      lowercase: true,
      minlength: [5, "Email must be at least 5 characters long"],
      maxlength: [254, "Email cannot exceed 254 characters"],
      unique: true,
    },

    mobileNumber: {
      unique: true,
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"],
    },

    officeAddress: {
      type: String,
      uppercase: true,
      required: [true, "Office address is required"],
      trim: true,
      minlength: [5, "Address must be at least 5 characters long"],
      maxlength: [500, "Address can't be exceed 500 characters"],
    },
  },
  { timestamps: true },
);


agentSchema.index({ firstName: 1, lastName: 1 });
agentSchema.index({ createdAt: -1 });

const Agent = mongoose.model("Agent", agentSchema);
export default Agent;
