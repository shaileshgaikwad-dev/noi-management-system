import enquiryValidator from "../validators/inquiryValidator.js";

export const validateEnquiry = (req, res, next) => {
  try {
    const validatedEnquiry = enquiryValidator.parse(req.body);

    req.validatedEnquiry = validatedEnquiry;

    next();
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }
  }
};
