import clientValidator from "../validators/clientValidator.js";

export const validateClient = (req, res, next) => {
  try {
    const validatedData = clientValidator.parse(req.body);

    req.validatedData = validatedData;

    next();
  } catch (error) {
    if (error.name === "ZodError") {
      //console.log("Zod validation issue : ", error.issues);
      return res.status(400).json({
        success: false,
        message: "Validation error",
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
