import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import { FaRobot } from 'react-icons/fa'; // Import an icon for the AI assistant

function Home({ setIsChatOpen }) {
  const [typedText, setTypedText] = useState('');
  // Using a more engaging opening phrase
  const fullText = "Hello World! I'm Jarius Raj Singh";
  const subtitle = "A passionate student exploring the fascinating realms of AI, ML, and Data Science. Welcome to my digital space!";

  // Effect for the typing animation
  useEffect(() => {
    let index = 0;
    // Adjust typing speed if needed (e.g., 70ms)
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70); // Typing speed in milliseconds
    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [fullText]); // Re-run if fullText changes (unlikely here, but good practice)

  // Animation variants for the main content container (staggers children)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.1, // Stagger animation for direct children
      },
    },
  };

  // Animation variants for individual text lines (slide up and fade in)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for the image container (initial entry)
  const imageEntryVariants = {
      hidden: { opacity: 0, scale: 0.8, x: 50 },
      visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } },
  };

  // Animation variants for the AI Assistant Icon
  const aiIconVariants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 1.5 } }, // Appears after other animations
      hover: { scale: 1.1, rotate: 10, boxShadow: '0 0 15px rgba(0, 221, 235, 0.5)' }, // Subtle hover effect
      tap: { scale: 0.9 },
  };


  return (
    // Set background to transparent to allow AnimationWrapper background
    // Use flexbox to center content vertically and horizontally
    <section id="home" className="relative py-16 md:py-24 bg-transparent text-white min-h-screen flex items-center justify-center overflow-hidden font-poppins">

      {/* Hero Content Container - Two Columns */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

        {/* Text Content Block */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left" // Adjusted text alignment based on screen size
          variants={containerVariants} // Apply staggered entry animation
          initial="hidden"
          animate="visible" // Animate when component mounts
        >
          {/* Main Title with Typing Effect */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent mb-4" // Gradient text
            variants={textVariants} // Apply animation variants
            style={{ minHeight: '1.5em' }} // Ensure consistent height during typing
          >
            {typedText}
            {/* Blinking cursor */}
            <motion.span
               className="inline-block ml-1 text-ai-blue" // Styled cursor
               animate={{ opacity: [0, 1, 1, 0] }} // Blinking animation
               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              |
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-8" // Increased text size
            variants={textVariants} // Apply animation variants
          >
            {subtitle}
          </motion.p>

          {/* Call to Action (Optional - could add a button here later) */}
          {/* For now, the AI Assistant is the primary interaction */}

        </motion.div>

        {/* Image Block - Added flip and glow */}
        <motion.div
           className="w-full md:w-1/2 flex justify-center md:justify-end relative perspective-1000" // Center image on mobile, align right on desktop, added perspective
           variants={imageEntryVariants} // Apply initial entry animation
           initial="hidden"
           whileInView="visible" // Animate when component scrolls into view (or on mount if already visible)
           viewport={{ once: true, amount: 0.5 }}
        >
           {/* Flip Card Container */}
           <motion.div
              className="flip-card-inner transition-transform duration-700 transform-style-3d rounded-full border-4 border-ai-blue/50 shadow-xl" // Apply flip transition, border, shadow
              whileHover={{ rotateY: 180, scale: 1.05, boxShadow: '0 0 30px rgba(0, 221, 235, 0.6)' }} // Flip, zoom, and glow on hover
              whileTap={{ scale: 0.95 }} // Subtle press animation
              style={{ width: 'clamp(200px, 80%, 400px)', height: 'clamp(200px, 80%, 400px)' }} // Responsive fixed size
           >
              {/* Image Front */}
              <img
                 src="https://my-project-imp-981.s3.ap-south-1.amazonaws.com/profile-2.png" // Placeholder URL for the front image
                 alt="Your Name - Portfolio Image Front" // Descriptive alt text
                 className="flip-card-front w-full h-full rounded-full object-cover absolute top-0 left-0 backface-hidden" // Styled as a circle, absolute positioning
              />

              {/* Image Back - Replace with your actual photo */}
              <img
                 src="https://my-project-imp-981.s3.ap-south-1.amazonaws.com/profile-1.jpg" // Placeholder URL for the back image (replace!)
                 alt="Your Name - Portfolio Image Back" // Descriptive alt text
                 className="flip-card-back w-full h-full rounded-full object-cover absolute top-0 left-0 backface-hidden" // Styled as a circle, absolute positioning
              />
           </motion.div>
        </motion.div>

      </div>

      {/* AI Assistant Icon - Fixed Position */}
      <motion.button
         onClick={() => setIsChatOpen(true)}
         className="fixed bottom-8 right-8 z-50 bg-ai-blue text-ai-dark p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ai-blue/50" // Styled as a floating circle button
         variants={aiIconVariants}
         initial="hidden"
         animate="visible" // Animate when component mounts
         whileHover="hover" // Apply hover animation
         whileTap="tap" // Apply tap animation
         aria-label="Open AI Assistant" // Accessibility label
      >
          <FaRobot className="text-2xl" /> {/* Robot icon */}
      </motion.button>


       {/* Custom CSS for flip animation */}
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }

        /* Perspective for 3D flip effect */
        .perspective-1000 {
          perspective: 1000px;
        }

        /* Container for the flip animation */
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s; /* Match duration with motion transition */
        }

        /* Front and back of the flip card */
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
        }

        /* Back side is initially hidden and rotated */
        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Blob Animation (If used elsewhere, keep here or in global CSS) */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Shadow glow class (if used elsewhere) */
        .shadow-glow {
          box-shadow: 0 0 15px rgba(0, 221, 235, 0.4);
        }
      `}</style>
    </section>
  );
}

export default Home;
