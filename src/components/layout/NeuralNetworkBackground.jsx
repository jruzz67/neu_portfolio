import React, { useEffect, useRef } from 'react';

function NeuralNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Dynamic particle count based on screen width
    const getParticleCount = () => Math.max(20, Math.min(80, window.innerWidth / 20)); // 20-80 particles based on width
    let particleCount = getParticleCount();

    // Initialize particles array
    const particles = [];
    const initializeParticles = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (window.innerWidth / 1000 + 1) + 1, // Dynamic radius based on screen width
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    // Canvas resize function
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = getParticleCount(); // Update particle count on resize
      initializeParticles(); // Reinitialize with new count and bounds
    };

    // Initial setup
    resizeCanvas();
    initializeParticles();

    function animate() {
      // Set canvas background to match dark theme
      ctx.fillStyle = 'rgba(10, 15, 43, 0.1)'; // Dark blue background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        const pulseSize = p.radius * (1 + Math.sin(p.pulse) * 0.5);
        p.pulse += 0.05;

        const particleColor = '#00ddeb';
        const lineColor = '#00ddeb';

        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        particles.slice(i + 1).forEach(p2 => {
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${hexToRgb(lineColor).r}, ${hexToRgb(lineColor).g}, ${hexToRgb(lineColor).b}, ${1 - distance / 120})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const resizeHandler = () => {
      resizeCanvas();
    };
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  return <canvas ref={canvasRef} className="w-full h-full neural-network" />;
}

export default NeuralNetworkBackground;