import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.min(window.scrollY / 200, 1); // Gradual opacity from 0 to 1 over 200px
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
        boxShadow: `0 4px 15px rgba(0, 221, 235, ${scrollOpacity * 0.2})`, // Subtle glow effect
      }}
    >
      {/* <div className="text-2xl font-bold text-ai-blue pl-4"></div> */}
      <div className="text-2xl font-bold text-ai-blue pl-4">My Portfolio</div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-ai-blue hover:text-ai-accent focus:outline-none p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      <ul
        className={`md:flex md:space-x-8 text-ai-blue font-semibold ${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row absolute md:static top-16 right-4 md:right-auto p-4 md:p-0 rounded-lg md:rounded-none transition-all duration-500`}
      >
        <li className="my-2 md:my-0">
          <a href="#home" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2">
            <i className="fas fa-home text-sm"></i>
            <span>Home</span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a href="/experience" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2">
            <i className="fas fa-briefcase text-sm"></i>
            <span>Experience</span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#projects" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2">
            <i className="fas fa-project-diagram text-sm"></i>
            <span>Projects</span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#skills" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2">
            <i className="fas fa-tools text-sm"></i>
            <span>Skills</span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a href="https://your-blog-link.com" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-blog text-sm"></i>
            <span>Blog</span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#contact" className="flex items-center space-x-2 hover:text-ai-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-ai-accent after:transition-all after:duration-300 hover:after:w-full py-2">
            <i className="fas fa-envelope text-sm"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;