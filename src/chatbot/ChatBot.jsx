import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

import "./chatbot.css";
import chatbotData from "./chatbotData";
import chatbotLogo from "../assets/chatbot.jpg";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello!\n\nWelcome to ZibaGo.\n\nHow can I help you today?",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  function botReply(userText) {
    setTyping(true);

    setTimeout(() => {
      const text = userText.toLowerCase();

      let reply =
        "🤖 Sorry, I couldn't understand.\n\nTry asking about:\n\n🚗 Rent\n💰 Price\n👨 Driver\n🤝 Partner\n📞 Contact";

      chatbotData.forEach((item) => {
        if (item.keywords.some((keyword) => text.includes(keyword))) {
          reply = item.answer;
        }
      });

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);
    }, 1200);
  }
  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    botReply(input);

    setInput("");
  }

  return (
    <>
      {!open && (
        <div className="welcome-popup">
          👋 Need Help?
          <br />
          Chat with
          <b> ZibaBot</b>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        {!open && <div className="chat-badge">1</div>}

        {open ? (
          <FaTimes size={24} />
        ) : (
          <img src={chatbotLogo} alt="ZibaBot" className="chatbot-logo" />
        )}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="bot-info">
              <div className="bot-avatar">🤖</div>

              <div>
                <h3>ZibaBot</h3>
                <select className="language-select">
                  <option>🇬🇧 English</option>

                  <option>🇮🇳 हिन्दी</option>

                  <option>🟢 ଓଡ଼ିଆ</option>
                </select>

                <div className="online-status">
                  <div className="online-dot"></div>
                  Online
                </div>
              </div>
            </div>
          </div>

          <div className="chat-body">
            <div className="quick-replies">
              <button onClick={() => botReply("rent")}>🚗 Rent</button>

              <button onClick={() => botReply("price")}>💰 Pricing</button>

              <button onClick={() => botReply("driver")}>👨 Driver</button>

              <button onClick={() => botReply("partner")}>🤝 Partner</button>

              <button onClick={() => botReply("contact")}>📞 Contact</button>
            </div>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "bot" ? "bot-message" : "user-message"
                }
              >
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="typing">
                <span></span>

                <span></span>

                <span></span>
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          <div className="chat-footer">
            <input
              value={input}
              placeholder="Ask me anything..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button onClick={sendMessage}>
              <FaPaperPlane />
            </button>
          </div>
          <a
            href={`https://wa.me/917377747575?text=${encodeURIComponent(
              "Hello ZibaGo, I want to rent a car.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-whatsapp"
          >
            <FaWhatsapp size={22} />

            <div>
              <strong>Chat with us on WhatsApp</strong>

              <p>Usually replies within a few minutes</p>
            </div>
          </a>
        </div>
      )}
    </>
  );
}
