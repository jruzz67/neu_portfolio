import React, { useEffect } from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

function AnimationWrapper({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector('.neural-network');
      if (background) {
        const opacity = 1 - window.scrollY / 500;
        background.style.opacity = Math.max(0.3, opacity);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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