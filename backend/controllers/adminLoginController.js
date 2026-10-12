import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { LoginEmail } from "../utils/emailservice.js";

export async function loginAdmin(req, res) {
  try {
    const { email, hashPassword } = req.body;

    if (!email || !hashPassword) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await Admin.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const passwordMismatch = await bcrypt.compare(
      hashPassword,
      user.hashPassword,
    );
    if (!passwordMismatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email.toLowerCase().trim(),
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      },
    );

    const previousLogin = user.lastLoginAt;
    user.lastLoginAt = new Date();
    await user.save();

    LoginEmail(user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      lastLoginAt: previousLogin,
      email: user.email,
      name : user.name,
    });
  } catch (error) {
    console.log("Login error : ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
