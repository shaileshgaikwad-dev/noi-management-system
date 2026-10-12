import { useState } from "react";
import type { ChatMessage } from "../../types/chatbot.types";
import { askChatbot } from "../../services/chatBotService";

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello ! I'm your Notice of Intimation Assistant. How can I help you?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (message: string) => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((previousMessages) => [...previousMessages, userMessage]);

    try {
      setLoading(true);

      const response = await askChatbot({ prompt: message });

      if (!response.success) {
        throw new Error(response.message || "Failed to get AI response");
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.answer || "I don't have a response for that.",
      };

      setMessages((previousMessage) => [...previousMessage, assistantMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Sorry, I couldn't process your request right now. Please try again.",
      };
      setMessages((previousMessages) => [...previousMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, sendMessage };
}
