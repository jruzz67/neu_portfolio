import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaProjectDiagram, FaTools, FaBlog, FaEnvelope, FaUser } from 'react-icons/fa'; // Import Fa icons

function Navbar() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.min(window.scrollY / 200, 1);
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-[calc(100%-2rem)] mx-4 z-50 p-4 flex justify-between items-center transition-all duration-500 rounded-b-3xl"
      style={{
        background: `linear-gradient(to right, rgba(10, 15, 43, ${scrollOpacity * 0.8}), rgba(10, 15, 43, ${scrollOpacity * 0.5}))`,
        boxShadow: `0 4px 15px rgba(0, 221, 235, ${scrollOpacity * 0.2})`,
      }}
    >
      <div className="text-2xl font-bold text-ai-blue pl-4">JRS</div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-ai-blue hover:text-ai-accent focus:outline-none p-2"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      <ul
        className={`md:flex md:space-x-8 text-ai-blue font-semibold ${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row absolute md:static top-16 right-4 md:right-auto p-4 md:p-0 rounded-lg md:rounded-none transition-all duration-500 backdrop-blur-sm md:backdrop-blur-none bg-ai-dark/80 md:bg-transparent`}
      >
        <li className="my-2 md:my-0">
          <a href="#home" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}>
            <FaHome className="text-sm" />
            <span>Home</span>
          </a>
        </li>

        {/* Added About Link */}
        <li className="my-2 md:my-0">
           <a href="#about" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}>
             <FaUser className="text-sm" /> {/* Using FaUser icon for About */}
             <span>About</span>
           </a>
         </li>


        <li className="my-2 md:my-0">
          <Link to="/experience" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}>
            <FaBriefcase className="text-sm" />
            <span>Experience</span>
          </Link>
        </li>

        <li className="my-2 md:my-0">
          <a href="#projects" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}>
            <FaProjectDiagram className="text-sm" />
            <span>Projects</span>
          </a>
        </li>

        <li className="my-2 md:my-0">
          <a href="#skills" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}>
            <FaTools className="text-sm" />
            <span>Skills</span>
          </a>
        </li>

        {/* Removed Resume Link */}
        {/* <li className="my-2 md:my-0">
           <a href="#resume" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}>
             <i className="fas fa-file-alt text-sm"></i>
             <span>Resume</span>
           </a>
         </li> */}

        <li className="my-2 md:my-0">
          <a href="https://your-blog-link.com" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
            <FaBlog className="text-sm" />
            <span>Blog</span>
          </a>
        </li>

        <li className="my-2 md:my-0">
          <a href="#contact" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" onClick={() => setIsOpen(false)}>
            <FaEnvelope className="text-sm" />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
