import mongoose from "mongoose";
import Admin from "../models/Admin.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

export async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    const name = process.env.ADMIN_NAME.trim();
    const email = process.env.ADMIN_EMAIL.toLowerCase().trim();
    const password = process.env.ADMIN_PASSWORD.trim();

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log(`Admin with ${email} already exists`);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const admin = new Admin({
      name,
      email,
      hashPassword,
    });

    await admin.save();

    console.log("✅ Admin created successfully");
    console.log(`Admin email: ${admin.email}`);
    console.log(`Admin ID: ${admin._id}`);
  } catch (error) {
    console.log("Error creating admin : ", error);
  }
}

createAdmin();
