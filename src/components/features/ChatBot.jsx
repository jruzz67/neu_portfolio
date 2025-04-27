import React, { useState, useEffect, useRef } from 'react';

function ChatBot({ isOpen, setIsChatOpen }) {
  const [messages, setMessages] = useState([
    { text: "Hello! I’m your AI Assistant. I can help you explore Jarius's portfolio or answer AI-related questions.", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [navbarHeight, setNavbarHeight] = useState(0);
  const chatContainerRef = useRef(null);

  // Get Navbar height on mount and resize
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
    const handleResize = () => {
      if (navbar) setNavbarHeight(navbar.offsetHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I’m still in development, but I’d love to chat! What’s on your mind?", sender: 'bot' },
      ]);
    }, 500);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed right-4 bottom-4 w-full sm:w-96 h-[calc(100%-64px)] sm:h-[calc(100%-96px)] bg-gradient-to-br from-ai-dark/90 via-ai-accent/10 to-ai-dark/90 backdrop-blur-lg p-4 sm:p-6 shadow-2xl rounded-l-lg transition-transform duration-500 animate-slide-in flex flex-col glow-effect"
      style={{ top: `${navbarHeight + 10}px`, zIndex: 50 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-ai-blue/30 pb-2">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-ai-blue rounded-full mr-2 animate-pulse" />
          <h3 className="text-xl font-bold text-ai-blue glow-text">AI Assistant</h3>
        </div>
        <button
          onClick={() => setIsChatOpen(false)}
          className="text-ai-blue hover:text-ai-accent focus:outline-none p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-message`}
          >
            <div className="flex items-end">
              {msg.sender === 'bot' && (
                <div className="w-6 h-6 bg-ai-blue/30 rounded-full mr-2" />
              )}
              <div
                className={`max-w-[75%] p-3 rounded-lg shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-ai-accent text-ai-dark'
                    : 'bg-ai-blue/20 text-gray-200 border border-ai-blue/30'
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                <div className="w-6 h-6 bg-ai-dark/50 rounded-full ml-2" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-2 p-2 bg-ai-dark/80 rounded-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask me anything..."
          className="flex-1 p-2 bg-transparent border border-ai-blue/30 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-accent transition-all duration-300"
        />
        <button
          onClick={handleSend}
          className="px-3 py-2 bg-ai-accent text-ai-dark hover:bg-ai-accent/80 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
        >
          Send
        </button>
      </div>

      {/* Styles */}
      <style>{`
        .glow-effect {
          box-shadow: 0 0 15px rgba(255, 105, 180, 0.15); /* Pink glow at 50% intensity */
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(0, 221, 235, 0.5); /* Blue glow for text */
        }
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fade-in-message {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        .animate-fade-in-message {
          animation: fade-in-message 0.3s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </div>
  );
}

export default ChatBot;