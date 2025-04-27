import React, { useState, useEffect } from 'react';

function Home({ setIsChatOpen }) {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hey, I'm Jarius Raj Singh";
  const subtitle = "A passionate student exploring AI, ML, and Data Science. Welcome to my portfolio!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="p-12 text-white min-h-screen flex items-center animate-fade-in">
      <div className="bg-ai-dark/20 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-ai-blue mb-4" style={{ minHeight: '2.5em' }}>
          {typedText}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-gray-300 mb-6" style={{ animation: 'wave 2s infinite' }}>{subtitle}</p>
        <button
          onClick={() => setIsChatOpen(true)}
          className="px-6 py-3 bg-ai-blue text-ai-dark hover:bg-ai-blue/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Meet My AI Assistant (Coming Soon)
        </button>
      </div>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;