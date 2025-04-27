import React from 'react';

function Footer() {
  return (
    <footer className="p-6 bg-gradient-to-r from-ai-dark to-ai-dark/70 text-center text-white shadow-inner flex justify-between items-center glow-effect"
      style={{
        boxShadow: '0 0 15px rgba(0, 221, 235, 0.3)', // Subtle glow around the footer
      }}>
      <div className="text-lg glow-text">Jarius Raj Singh</div>
      <div className="text-lg glow-text">© 2025 All rights reserved.</div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:text-ai-accent text-2xl glow-text">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:text-ai-accent text-2xl glow-text">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:text-ai-accent text-2xl glow-text">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <style>{`
        .glow-effect {
          box-shadow: 0 0 15px rgba(0, 221, 235, 0.3); /* Consistent glow effect */
        }
        .glow-text {
          text-shadow: 0 0 5px rgba(0, 221, 235, 0.5); /* Glow effect on text */
        }
      `}</style>
    </footer>
  );
}

export default Footer;