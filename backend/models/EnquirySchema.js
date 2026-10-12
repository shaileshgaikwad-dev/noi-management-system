import mongoose from "mongoose";

const enquireSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name required"],
      trim: true,
      uppercase: true,
      minlength: [2, "Full name must contain 2 words"],
      maxlength: [200, "Cannot be more than 200 words"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email",
      ],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
      match: [
        /^[6-9]\d{9}$/,
        "Mobile number must be 10 digits and start with 6, 7, 8, or 9",
      ],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [5, "Message must be at least 5 characters"],
      maxlength: [2000, "Message cannot be more than 2000 characters"],
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Resolved"],
      default: "New",
      trim: true,
    },
  },
  { timestamps: true },
);

enquireSchema.index({ status: 1 });
enquireSchema.index({ createdAt: -1 });
enquireSchema.index({ email: 1 });

const Enquiry = mongoose.model("Enquiry", enquireSchema);

export default Enquiry;
