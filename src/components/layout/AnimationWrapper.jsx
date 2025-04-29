import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to check the current route
import NeuralNetworkBackground from './NeuralNetworkBackground';

function AnimationWrapper({ children }) {
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const background = document.querySelector('.neural-network');
    if (!background) return;

    // If on /experience route, set fixed opacity to 0.3 and skip scroll effect
    if (location.pathname === '/experience') {
      background.style.opacity = 0.3;
      return; // Exit the effect to avoid adding the scroll listener
    }

    // For all other routes, apply the scroll-based opacity effect
    const handleScroll = () => {
      const opacity = 1 - window.scrollY / 500;
      background.style.opacity = Math.max(0.3, opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Re-run effect when the route changes

  return (
    <div className="min-h-screen overflow-hidden bg-ai-dark">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralNetworkBackground />
      </div>
      <div className="fixed inset-0 z-5 bg-ai-dark/50 pointer-events-none" />
      <div className="relative z-10 text-white">{children}</div>
    </div>
  );
}

export default AnimationWrapper;