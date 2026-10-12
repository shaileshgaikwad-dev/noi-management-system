import { askAiService } from "../services/aiservice.js";

export async function askAiController(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res
        .status(400)
        .json({ success: false, message: "Prompt is required" });
    }

    if (prompt.length > 500) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Prompt is too long (max 500 characters)",
        });
    }

    const answer = await askAiService(prompt);

    return res
      .status(200)
      .json({
        success: true,
        message: "Google Gemini 3.6 flash Ai is working",
        answer,
      });
  } catch (error) {
    console.log("AI controller error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get AI response",
    });
  }
}
