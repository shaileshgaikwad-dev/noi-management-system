import { useEffect, useRef, useState } from "react";
import { useChatbot } from "../../hooks/chatbot/useChatbot";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, loading, sendMessage } = useChatbot();

  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, isOpen]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    sendMessage(input);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed bottom-24 right-5 z-50 flex h-[520px] w-[calc(100vw-2.5rem)] 
            max-w-sm flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl sm:w-96"
        >
          {/* header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-3">
            {/* left icon + title */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase text-white">
                  Notice of Intimation Assistant
                </p>
                <p className="text-[10px]  font-semibold text-purple-100">
                  Online
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer rounded-lg p-1.5 text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm 
                            leading-relaxed ${
                              message.role === "user"
                                ? "rounded-br-sm bg-gradient-to-br from-purple-600 to-indigo-600 text-white"
                                : "rounded-bl-sm bg-white text-slate-800 shadow-sm"
                            }`}
                >
                  <p className="whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                  <div className="flex gap-2">
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-purple-500"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-purple-500"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-purple-500"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          {/* footer */}
          <div className="border-t border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Ask anything..."
                className="w-full px-3 py-2.5 rounded-lg border-2 border-slate-300 bg-white text-slate-900 caret-purple-600 focus:border-purple-500 focus:outline-none"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="cursor-pointer flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center justify-center
                gap-2 rounded-full px-4 py-4 text-sm font-semibold
                text-white bg-purple-400 shadow-2xl transition-all
                duration-300 hover:scale-105 active:scale-95 cursor-pointer ${isOpen ? "bg-slate-900 hover:bg-slate-800" : "bg-purple-600 hover:bg-purple-700"}`}
          >
            {isOpen ? (
              <>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Close
              </>
            ) : (
              <>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Intimation Assistant
              </>
            )}
          </button>
        </div>
      }
    </>
  );
}
