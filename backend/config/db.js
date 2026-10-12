import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

export async function connectDB() {
  if (!url) {
    console.error("MONGO_URL is not defined in .env file");
    process.exit(1);
  }

  try {
    await mongoose.connect(url);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Connection error ", error);
  }
}
