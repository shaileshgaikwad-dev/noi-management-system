export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

//chat request

export interface ChatRequest {
  prompt: string;
}

//chat response

export interface ChatResponse {
  success: boolean;
  message: string;
  answer: string;
}
