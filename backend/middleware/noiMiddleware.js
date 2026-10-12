import { noiValidator } from "../validators/noiValidator.js";

export const validateNoi = (req, res, next) => {
  try {
    const validatedNoiData = noiValidator.parse(req.body);
    req.validatedNoiData = validatedNoiData;

    next();
  } catch (error) {
    if (error.name === "ZodError") {
      //console.log("Zod validation issue : ", error.issues);
      return res.status(400).json({
        success: false,
        message: "Noi Validation error",
        errors: error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }
    console.error("Validation middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
