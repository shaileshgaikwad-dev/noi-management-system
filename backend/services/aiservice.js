import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash-lite",
  apiKey: process.env.GOOGLE_API_KEY,
  maxOutputTokens: 2048,
  thinkingConfig: {
    thinkingLevel: "MEDIUM",
  },
});

const System_prompt = `

You are a Notice of Intimation (NOI) Assistant for a mortgage/NOI business.

SCOPE:
- Casual small talk (greetings, "how are you", thanks, goodbye) is allowed — reply briefly and naturally.
- For anything else, only answer questions related to NOI, mortgages, property registration, clients, agents, or this business's services.
- If a question is unrelated to NOI/mortgage topics (general knowledge, coding, other topics), reply exactly:
  "I can only help with NOI and mortgage-related questions."

STRICT RULES:
- Reply in 2-3 short sentences maximum.
- Keep the response under 80 words.
- Answer directly, no greetings or introductions before the answer.
- No bullet points unless the user asks for them.
- Do not invent NOI charges, legal requirements, documents, or business information.
- If you don't know something within scope, clearly say you don't know rather than guessing.

`;

export async function askAiService(prompt) {
  try {
    const response = await model.invoke([
      new SystemMessage(System_prompt),
      new HumanMessage(prompt),
    ]);

    return response.content;
  } catch (error) {
    console.log("AI service error:", error);
    throw error;
  }
}
