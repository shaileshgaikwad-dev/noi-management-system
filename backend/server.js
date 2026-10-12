import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.js";
import adminRoute from "./routes/adminRoute.js";
import agentRoute from "./routes/agentRoute.js";
import clientRoute from "./routes/clientRoute.js";
import transporter from "./config/mail.js";
import noiRoute from "./routes/noiRoute.js";
import dashboardRoute from "./routes/dashboardRoute.js";
import incomeRoute from "./routes/incomeRoute.js";
import airoute from "./routes/airoute.js";
import enquiryRouter from "./routes/enquiryRouter.js";
import { success } from "zod";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

//connection with database
await connectDB();
//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/admin", adminRoute);
app.use("/agents", agentRoute);
app.use("/clients", clientRoute);
app.use("/noi", noiRoute);
app.use("/dashboard", dashboardRoute);
app.use("/report", incomeRoute);
app.use("/ai", airoute);
app.use("/enquiries", enquiryRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to NOI Management API",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

// 404 - Route not found
app.use((req, res, next) => {
  res
    .status(404)
    .json({ success: false, message: `Route not found : ${req.originalUrl}` });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
app.listen(PORT, () => {
  console.log(`server started at : http://127.0.0.1:${PORT}`);
});
