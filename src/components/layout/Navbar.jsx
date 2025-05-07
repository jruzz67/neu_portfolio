import React, { useState, useEffect } from 'react';
// Import the Link component from react-router-dom
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Gradual opacity from 0 to 1 over 200px scroll
      const opacity = Math.min(window.scrollY / 200, 1);
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <nav
      className="fixed top-0 left-0 w-[calc(100%-2rem)] mx-4 z-50 p-4 flex justify-between items-center transition-all duration-500 rounded-b-3xl"
      style={{
        background: `linear-gradient(to right, rgba(10, 15, 43, ${scrollOpacity * 0.8}), rgba(10, 15, 43, ${scrollOpacity * 0.5}))`,
        boxShadow: `0 4px 15px rgba(0, 221, 235, ${scrollOpacity * 0.2})`, // Subtle glow effect based on scroll
      }}
    >
      {/* Portfolio Title - Can be a Link to home or just text */}
      <div className="text-2xl font-bold text-ai-blue pl-4">JRS</div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-ai-blue hover:text-ai-accent focus:outline-none p-2"
          aria-label="Toggle navigation menu" // Added accessibility label
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Animated hamburger/close icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-8 text-ai-blue font-semibold ${
          isOpen ? 'flex' : 'hidden' // Show/hide based on mobile menu state
        } flex-col md:flex-row absolute md:static top-16 right-4 md:right-auto p-4 md:p-0 rounded-lg md:rounded-none transition-all duration-500 backdrop-blur-sm md:backdrop-blur-none bg-ai-dark/80 md:bg-transparent`} // Added backdrop blur and background for mobile menu
      >
        {/* Home Link (Hash link for current page section) */}
        <li className="my-2 md:my-0">
          <a href="#home" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}> {/* Close menu on click */}
            <i className="fas fa-home text-sm"></i> {/* Font Awesome Icon */}
            <span>Home</span>
          </a>
        </li>

        {/* Experience Link (Using Link component for route navigation) */}
        <li className="my-2 md:my-0">
          {/* Use Link component with 'to' prop */}
          <Link to="/experience" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}> {/* Close menu on click */}
             <i className="fas fa-briefcase text-sm"></i> {/* Font Awesome Icon */}
            <span>Experience</span>
          </Link>
        </li>

        {/* Projects Link (Hash link for current page section) */}
        <li className="my-2 md:my-0">
          <a href="#projects" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}> {/* Close menu on click */}
            <i className="fas fa-project-diagram text-sm"></i> {/* Font Awesome Icon */}
            <span>Projects</span>
          </a>
        </li>

        {/* Skills Link (Hash link for current page section) */}
        <li className="my-2 md:my-0">
          <a href="#skills" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}> {/* Close menu on click */}
            <i className="fas fa-tools text-sm"></i> {/* Font Awesome Icon */}
            <span>Skills</span>
          </a>
        </li>

         {/* Resume Link (Hash link for current page section) */}
        <li className="my-2 md:my-0">
          <a href="#resume" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}> {/* Close menu on click */}
            <i className="fas fa-file-alt text-sm"></i> {/* Font Awesome Icon */}
            <span>Resume</span>
          </a>
        </li>


        {/* Blog Link (External link, keep as <a>) */}
        <li className="my-2 md:my-0">
          <a href="https://your-blog-link.com" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}> {/* Close menu on click */}
            <i className="fas fa-blog text-sm"></i> {/* Font Awesome Icon */}
            <span>Blog</span>
          </a>
        </li>

        {/* Contact Link (Hash link for current page section) */}
        <li className="my-2 md:my-0">
          <a href="#contact" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}> {/* Close menu on click */}
            <i className="fas fa-envelope text-sm"></i> {/* Font Awesome Icon */}
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
