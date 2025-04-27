import React, { useState } from 'react';

function Contact() {
  const [hoveredField, setHoveredField] = useState(null); // Track which field is hovered

  const handleHover = (field) => setHoveredField(field);
  const handleLeave = () => setHoveredField(null);

  return (
    <div className="pt-12 pr-12 pl-12 pb-4 text-white min-h-screen animate-fade-in">
      <h2 className="text-5xl font-bold text-ai-blue mb-8">Contact Me</h2>
      <form className="space-y-6 max-w-lg mx-auto">
        <div>
          <label className="text-gray-300">Name</label>
          <input
            type="text"
            className="w-full mt-2 p-3 bg-ai-dark/50 text-white rounded-lg border-2 border-ai-blue/20 focus:border-ai-blue focus:ring-2 focus:ring-ai-blue/50 transition-all duration-300"
            style={hoveredField === 'name' ? { boxShadow: '0 0 15px rgba(0, 221, 235, 0.3)' } : {}}
            placeholder="Your Name"
            onFocus={(e) => e.target.style.outline = 'none'} // Remove default outline
            onBlur={(e) => e.target.style.outline = ''} // Reset outline on blur
            onMouseEnter={() => handleHover('name')}
            onMouseLeave={handleLeave}
          />
        </div>
        <div>
          <label className="text-gray-300">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-3 bg-ai-dark/50 text-white rounded-lg border-2 border-ai-blue/20 focus:border-ai-blue focus:ring-2 focus:ring-ai-blue/50 transition-all duration-300"
            style={hoveredField === 'email' ? { boxShadow: '0 0 15px rgba(0, 221, 235, 0.3)' } : {}}
            placeholder="Your Email"
            onFocus={(e) => e.target.style.outline = 'none'} // Remove default outline
            onBlur={(e) => e.target.style.outline = ''} // Reset outline on blur
            onMouseEnter={() => handleHover('email')}
            onMouseLeave={handleLeave}
          />
        </div>
        <div>
          <label className="text-gray-300">Message</label>
          <textarea
            className="w-full mt-2 p-3 bg-ai-dark/50 text-white rounded-lg border-2 border-ai-blue/20 focus:border-ai-blue focus:ring-2 focus:ring-ai-blue/50 transition-all duration-300"
            style={hoveredField === 'message' ? { boxShadow: '0 0 15px rgba(0, 221, 235, 0.3)' } : {}}
            placeholder="Your Message"
            rows="5"
            onFocus={(e) => e.target.style.outline = 'none'} // Remove default outline
            onBlur={(e) => e.target.style.outline = ''} // Reset outline on blur
            onMouseEnter={() => handleHover('message')}
            onMouseLeave={handleLeave}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-ai-blue text-ai-dark hover:bg-ai-blue/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-ai-blue/50"
          style={hoveredField === 'button' ? { boxShadow: '0 0 15px rgba(0, 221, 235, 0.3)' } : {}}
          onMouseEnter={() => handleHover('button')}
          onMouseLeave={handleLeave}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;