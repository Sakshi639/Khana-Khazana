import React, { useState } from "react";

const defaultMessages = [
  { sender: "bot", text: "Hi! 👋 How can I help you today? (e.g. order status, payment, menu, account)" }
];

const faqAnswers = [
  { q: /order.*status|track/i, a: "You can track your order from your account dashboard or the order confirmation page." },
  { q: /cancel|modify.*order/i, a: "Orders can be cancelled or modified before they are prepared. Please contact support if you need help." },
  { q: /payment|pay/i, a: "We accept credit/debit cards, UPI, and wallets. All payments are secure." },
  { q: /menu|food|dish/i, a: "You can browse our menu on the Menu page. Let me know if you need recommendations!" },
  { q: /account|login|signup/i, a: "You can create an account or log in from the top right corner. If you forgot your password, use the reset link." },
  { q: /contact|support|help/i, a: "You can email us at support@foodieexpress.com or call +91 12345 67890." },
  { q: /refund|money/i, a: "Refunds are processed within 3-5 business days after approval." },
  { q: /delivery|time/i, a: "Delivery times depend on your location and the restaurant. Most orders arrive within 30-45 minutes." },
];

export default function HelpChatbot() {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    setTimeout(() => {
      let reply = "Sorry, I didn't understand that. Please try rephrasing or contact support.";
      for (const { q, a } of faqAnswers) {
        if (q.test(input)) {
          reply = a;
          break;
        }
      }
      setMessages((msgs) => [...msgs, { sender: "bot", text: reply }]);
      setLoading(false);
    }, 800);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
      <div className="bg-primary text-white px-4 py-2 rounded-t-lg font-semibold">Help Center Chatbot</div>
      <div className="flex-1 p-3 overflow-y-auto" style={{ maxHeight: 320 }}>
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.sender === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-xs text-gray-400">Bot is typing...</div>}
      </div>
      <form onSubmit={handleSend} className="flex border-t border-gray-200">
        <input
          className="flex-1 px-3 py-2 text-sm outline-none"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="px-4 py-2 text-primary font-bold" disabled={loading || !input.trim()}>Send</button>
      </form>
    </div>
  );
}
