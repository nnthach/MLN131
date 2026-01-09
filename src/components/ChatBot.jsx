import { Send, Star, X, MessageCircle } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import "./ChatBot.css";

function ChatBox() {
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Xin chào! Tôi là trợ lý AI về chủ nghĩa Mác - Lênin. Tôi có thể giúp bạn tìm hiểu Chương 2: Sứ mệnh lịch sử của giai cấp công nhân.",
    },
  ]);

  const messagesEndRef = useRef(null);
  const GEMINI_KEY = import.meta.env.VITE_API_GEMINI_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) scrollToBottom();
  }, [messages, isChatOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `
Bạn là chuyên gia về chủ nghĩa Mác - Lênin.
Chỉ trả lời nội dung Chương 2: Sứ mệnh lịch sử của giai cấp công nhân trong chủ đề CHỦ NGHĨA XÃ HỘI KHOA HỌC.
Lưu ý trả lời ngắn gọn và chi tiết, phân đoạn và gạch đầu dòng cho dễ nhìn.
Nếu ngoài phạm vi, trả lời:
"Xin lỗi, vui lòng hỏi đúng trọng tâm của Chương 2 về Sứ mệnh lịch sử của giai cấp công nhân."

Câu hỏi: ${input}
`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Không có phản hồi",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Xin lỗi, đã có lỗi khi kết nối AI.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 🔵 CHAT BUTTON (CHƯA OPEN) */}
      {!isChatOpen && (
        <button className="chat-fab" onClick={() => setIsChatOpen(true)}>
          <MessageCircle size={26} />
        </button>
      )}

      {/* 🟢 CHAT BOX */}
      {isChatOpen && (
        <div className="chatbox slide-up">
          <div className="chat-header">
            <div className="chat-title">
              <Star size={22} fill="#facc15" />
              <span>AI Trợ Lý Mác – Lênin</span>
            </div>
            <button className="close-btn" onClick={() => setIsChatOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}

            {isLoading && (
              <div className="message assistant">
                <div className="message-content loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Nhập câu hỏi..."
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={!input.trim() || isLoading}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(ChatBox);
