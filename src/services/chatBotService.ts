import { type ChatRequest, type ChatResponse } from "../types/chatbot.types";
import { api } from "./api";

export async function askChatbot(data: ChatRequest) {
  const response = await api.post<ChatResponse>(`/ai/ask`, data);

  return response.data;
}
