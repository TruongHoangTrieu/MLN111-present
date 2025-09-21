// import React, { useState, useRef, useEffect } from "react";
// import { FaComments } from "react-icons/fa";
// import "./ChatBot.css";

// export default function ChatBot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Xin chào! Tôi là Chatbot hỗ trợ Triết học Mác – Lê Nin. Bạn muốn hỏi gì?" }
//   ]);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   // Auto-scroll xuống cuối mỗi khi có tin nhắn mới
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     try {
//       const response = await fetch("https://api.openai.com/v1/responses", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "gemini-1.5",
//           input: `Bạn là chuyên gia triết học Mác-Lên-Lin. Hãy trả lời câu hỏi sau một cách chi tiết và đúng triết học: ${input}`,
//         }),
//       });

//       const data = await response.json();
//       const botMessage = {
//         sender: "bot",
//         text: data.output_text || "Xin lỗi, tôi không hiểu câu hỏi này."
//       };
//       setMessages(prev => [...prev, botMessage]);
//     } catch (error) {
//       console.error(error);
//       setMessages(prev => [...prev, { sender: "bot", text: "Đã xảy ra lỗi khi gửi câu hỏi." }]);
//     }
//   };

//   return (
//     <div className={`chatbot-container ${open ? "open" : ""}`}>
//       {/* Floating Button */}
//       {!open && (
//         <button className="chatbot-button" onClick={() => setOpen(true)}>
//           <FaComments size={24} />
//         </button>
//       )}

//       {/* Chat Window */}
//       {open && (
//         <div className="chatbot-window">
//           <div className="chatbot-header">
//             <h6>Triết học Mác – Lê Nin</h6>
//             <button onClick={() => setOpen(false)}>×</button>
//           </div>

//           <div className="chatbot-messages">
//             {messages.map((msg, idx) => (
//               <div key={idx} className={`chat-message ${msg.sender}`}>
//                 {msg.text}
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="chatbot-input">
//             <input
//               type="text"
//               placeholder="Nhập câu hỏi..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />
//             <button onClick={handleSend}>Gửi</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
