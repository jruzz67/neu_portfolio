import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import { FaRobot, FaDownload, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons
import { HiOutlineArrowRight } from 'react-icons/hi'; // Import an icon for the projects button

// Import your images from src/assets
// Corrected the paths to go up two directories from src/components/sections/
// !! IMPORTANT: Double-check these paths and file names match your project structure !!
import profile2 from '../../assets/profile-2.png'; // Assuming profile-2.png is directly in src/assets
import profile1 from '../../assets/profile-1.jpg'; // Assuming profile-1.jpg is directly in src/assets


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

  // Animation variants for the main hero container
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation for the two main columns
      },
    },
  };

  // Animation variants for the text content block
  const textBlockVariants = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for the image block
  const imageBlockVariants = {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };


  // Animation variants for individual text lines (slide up and fade in)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for the buttons container (staggers children)
  const buttonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for the buttons
      },
    },
  };

  // Animation variants for individual buttons
   const buttonVariants = {
       hidden: { opacity: 0, y: 20 },
       visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
       hover: { scale: 1.05, boxShadow: '0 0 20px rgba(0, 221, 235, 0.5)' }, // Enhanced hover glow
       tap: { scale: 0.95 },
   };

    // Animation variants for social icons
    const socialIconVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        hover: { scale: 1.2, color: '#00ddeb' }, // Scale and change color on hover
        tap: { scale: 0.9 },
    };


  // Animation variants for the AI Assistant Icon (fixed position)
  const aiIconVariants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 2 } }, // Appears after other animations
      hover: { scale: 1.1, rotate: 10, boxShadow: '0 0 15px rgba(0, 221, 235, 0.5)' }, // Subtle hover effect
      tap: { scale: 0.9 },
  };


  return (
    // Set background to transparent to allow AnimationWrapper background
    // Use flexbox to center content vertically and horizontally
    <section id="home" className="relative py-16 md:py-24 bg-transparent text-white min-h-screen flex items-center justify-center overflow-hidden font-poppins">

      {/* Hero Content Container - Two Columns */}
      <motion.div
         className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10"
         variants={heroContainerVariants} // Apply staggered entry to columns
         initial="hidden"
         animate="visible" // Animate when component mounts
      >

        {/* Text Content Block */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left" // Adjusted text alignment based on screen size
          variants={textBlockVariants} // Apply animation to the text block
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

          {/* Buttons Container - Apply staggered entry */}
          <motion.div
             className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start mb-8" // Button layout and spacing
             variants={buttonsContainerVariants} // Stagger button animations
          >
              {/* View Projects Button */}
               <motion.a
                   href="#projects" // Link to projects section
                   className="inline-block px-8 py-3 bg-transparent border-2 border-ai-blue text-ai-blue font-semibold hover:bg-ai-blue/10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-ai-blue/50 text-lg flex items-center justify-center space-x-2" // Styled as a contrast dim button
                   variants={buttonVariants}
                   whileHover="hover"
                   whileTap="tap"
               >
                   <span>View Projects</span>
                   <HiOutlineArrowRight className="text-xl" /> {/* Arrow icon */}
               </motion.a>

              {/* Resume Download Button - Integrated */}
              <motion.a
                href="https://mycareervault.s3.ap-south-1.amazonaws.com/Resume.pdf" // Replace with your actual resume link
                download="JariusRajSingh_Resume.pdf" // Suggest a filename
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-ai-blue text-ai-dark font-semibold hover:bg-ai-blue/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-ai-blue/50 text-lg flex items-center justify-center space-x-2" // Enhanced button styling, added flex/center for icon
                variants={buttonVariants} // Apply button animation
                whileHover="hover" // Apply hover animation
                whileTap="tap" // Apply tap animation
              >
                <span>Download Resume</span>
                <FaDownload className="text-xl" /> {/* Download icon */}
              </motion.a>

          </motion.div>

           {/* Social Icons */}
           <motion.div
              className="flex space-x-6 text-2xl justify-center md:justify-start text-gray-400" // Social icon styling
               variants={buttonsContainerVariants} // Use same stagger for social icons
           >
               <motion.a
                   href="https://github.com/yourusername" // Replace with your actual GitHub link
                   target="_blank"
                   rel="noopener noreferrer"
                   variants={socialIconVariants}
                   whileHover="hover"
                   whileTap="tap"
                   aria-label="GitHub"
               >
                   <FaGithub />
               </motion.a>
               <motion.a
                   href="https://linkedin.com/in/yourprofile" // Replace with your actual LinkedIn link
                   target="_blank"
                   rel="noopener noreferrer"
                   variants={socialIconVariants}
                   whileHover="hover"
                   whileTap="tap"
                   aria-label="LinkedIn"
               >
                   <FaLinkedinIn />
               </motion.a>
               <motion.a
                   href="https://twitter.com/yourhandle" // Replace with your actual Twitter link
                   target="_blank"
                   rel="noopener noreferrer"
                   variants={socialIconVariants}
                   whileHover="hover"
                   whileTap="tap"
                   aria-label="Twitter"
               >
                   <FaTwitter />
               </motion.a>
               <motion.a
                   href="https://instagram.com/yourhandle" // Replace with your actual Instagram link
                   target="_blank"
                   rel="noopener noreferrer"
                   variants={socialIconVariants}
                   whileHover="hover"
                   whileTap="tap"
                   aria-label="Instagram"
               >
                   <FaInstagram />
               </motion.a>
           </motion.div>


        </motion.div>

        {/* Image Block - Added flip and glow */}
        <motion.div
           className="w-full md:w-1/2 flex justify-center md:justify-end relative perspective-1000" // Center image on mobile, align right on desktop, added perspective
           variants={imageBlockVariants} // Apply animation to the image block
        >
           {/* Flip Card Container */}
           <motion.div
              className="flip-card-inner transition-transform duration-700 transform-style-3d rounded-full border-4 border-ai-blue/50 shadow-xl" // Apply flip transition, border, shadow
              whileHover={{ rotateY: 180, scale: 1.05, boxShadow: '0 0 30px rgba(0, 221, 235, 0.6)' }} // Flip, zoom, and glow on hover
              whileTap={{ scale: 0.95 }} // Subtle press animation
              style={{ width: 'clamp(250px, 80%, 450px)', height: 'clamp(250px, 80%, 450px)' }} // Increased responsive fixed size
           >
              {/* Image Front - Using imported local image */}
              <img
                 src={profile2} // Use the imported variable
                 alt="Your Name - Portfolio Image Front" // Descriptive alt text
                 className="flip-card-front w-full h-full rounded-full object-cover absolute top-0 left-0 backface-hidden" // Styled as a circle, absolute positioning
                 onError={(e) => console.error('Error loading front image:', e.target.src)} // Log error if image fails to load
              />

              {/* Image Back - Using imported local image */}
              <img
                 src={profile1} // Use the imported variable
                 alt="Your Name - Portfolio Image Back" // Descriptive alt text
                 className="flip-card-back w-full h-full rounded-full object-cover absolute top-0 left-0 backface-hidden" // Styled as a circle, absolute positioning
                 onError={(e) => console.error('Error loading back image:', e.target.src)} // Log error if image fails to load
              />
           </motion.div>
        </motion.div>

      </motion.div>

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


       {/* Custom CSS for flip animation and fonts */}
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap'); /* Added Orbitron font */

        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-orbitron { font-family: 'Orbitron', sans-serif; } /* Apply Orbitron to specific elements if desired */


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
