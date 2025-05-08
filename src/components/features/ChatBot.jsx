import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import { FaRobot, FaPaperPlane } from 'react-icons/fa'; // Import robot and paper plane icons

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
      // Use smooth scroll behavior
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newUserMessage = { text: input, sender: 'user' };
    setMessages([...messages, newUserMessage]); // Add user message immediately
    setInput(''); // Clear input field

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = { text: "I’m still in development, but I’d love to chat! What’s on your mind?", sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 800); // Bot responds after 800ms
  };

  // Animation variants for the chat window container
  const chatWindowVariants = {
    hidden: { opacity: 0, x: 400 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }, // Spring animation for smooth entry
    exit: { opacity: 0, x: 400, transition: { duration: 0.3, ease: 'easeIn' } }, // Slide out animation
  };

  // Animation variants for messages
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };


  // Use AnimatePresence to handle exit animations
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed right-4 bottom-4 w-full max-w-sm md:max-w-md lg:max-w-lg h-[calc(100%-80px)] bg-gradient-to-br from-ai-dark/95 via-ai-dark/80 to-ai-dark/95 backdrop-blur-xl p-4 sm:p-6 shadow-2xl rounded-l-xl rounded-tr-xl border border-ai-blue/20 flex flex-col glow-effect" // Enhanced styling, adjusted height calc, rounded corners, border
          style={{ top: `${navbarHeight + 10}px`, zIndex: 50 }} // Position below navbar
          variants={chatWindowVariants}
          initial="hidden"
          animate="visible"
          exit="exit" // Apply exit animation
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b border-ai-blue/30 pb-3"> {/* Adjusted padding */}
            <div className="flex items-center space-x-3"> {/* Added spacing */}
              {/* Animated AI Icon */}
              <motion.div
                 className="w-9 h-9 bg-ai-blue rounded-full flex items-center justify-center text-ai-dark text-xl" // Styled AI icon container
                 animate={{ scale: [1, 1.1, 1] }} // Subtle pulse animation
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                 <FaRobot /> {/* Robot icon */}
              </motion.div>
              <h3 className="text-xl font-bold text-ai-blue glow-text">AI Assistant</h3> {/* Blue glow for text */}
            </div>
            <motion.button
              onClick={() => setIsChatOpen(false)}
              className="text-ai-blue hover:text-ai-accent focus:outline-none p-1 transition-colors duration-200" // Added transition
              whileHover={{ scale: 1.1, rotate: 90 }} // Rotate and scale on hover
              whileTap={{ scale: 0.9 }} // Press animation
              aria-label="Close Chat" // Accessibility label
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          {/* Chat Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar"> {/* Increased spacing, added custom scrollbar class */}
            {messages.map((msg, index) => (
              <motion.div
                key={index} // Using index as key (consider a unique ID if messages can be reordered)
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                variants={messageVariants} // Apply message entry animation
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-end">
                  {/* Bot Avatar (Optional: replace with an image) */}
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 bg-ai-blue/30 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-ai-blue text-sm">
                        <FaRobot /> {/* Bot avatar icon */}
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-xl shadow-md border ${ // Increased max-width, rounded corners, added border
                      msg.sender === 'user'
                        ? 'bg-ai-accent text-ai-dark rounded-br-none border-ai-accent/50' // User message styling
                        : 'bg-ai-blue/20 text-gray-200 rounded-bl-none border-ai-blue/30' // Bot message styling
                    }`}
                  >
                    {msg.text}
                  </div>
                  {/* User Avatar (Optional: replace with an image) */}
                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 bg-ai-dark/50 rounded-full ml-2 flex-shrink-0 flex items-center justify-center text-gray-300 text-sm">
                        {/* User avatar icon or initial */}
                        JR {/* Example initials */}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center gap-3 p-3 bg-ai-dark/80 rounded-lg border border-ai-blue/30"> {/* Adjusted gap, padding, added border */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 p-2 bg-transparent border border-ai-blue/30 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-accent transition-all duration-300 text-sm" // Styled input
            />
            <motion.button
              onClick={handleSend}
              className="px-4 py-2 bg-ai-accent text-ai-dark hover:bg-ai-accent/80 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center" // Styled button, added flex/center for icon
              whileHover={{ scale: 1.05 }} // Scale on hover
              whileTap={{ scale: 0.95 }} // Press animation
              aria-label="Send Message" // Accessibility label
            >
              <FaPaperPlane className="text-lg" /> {/* Paper plane icon */}
            </motion.button>
          </div>

          {/* Styles */}
          <style>{`
            /* Custom Scrollbar */
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(10, 15, 43, 0.5); /* ai-dark with opacity */
              border-radius: 10px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(0, 221, 235, 0.5); /* ai-blue with opacity */
              border-radius: 10px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(0, 221, 235, 0.8); /* ai-blue with more opacity on hover */
            }

            /* Glow Effect for the Chat Window */
            .glow-effect {
              box-shadow: 0 0 25px rgba(0, 221, 235, 0.3); /* Blue glow */
            }

            /* Glow Effect for Text */
            .glow-text {
              text-shadow: 0 0 10px rgba(0, 221, 235, 0.5); /* Blue glow for text */
            }

            /* Animations (using framer-motion variants now) */
            /* @keyframes slide-in { ... } */
            /* @keyframes fade-in-message { ... } */
            /* @keyframes pulse { ... } */
            /* .animate-slide-in { ... } */
            /* .animate-fade-in-message { ... } */
            /* .animate-pulse { ... } */

          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ChatBot;
