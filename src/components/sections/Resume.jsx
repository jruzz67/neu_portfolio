import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

function Resume() {
   // Animation variants for the main container
   const containerVariants = {
       hidden: { opacity: 0, y: 50 },
       visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
   };

    // Animation variants for the container holding the two iframes
    const resumeViewerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } }, // Add delay after text
    };

  return (
    // Set background to transparent to allow AnimationWrapper background
    <section id="resume" className="relative py-16 md:py-24 bg-transparent text-white overflow-hidden font-poppins flex flex-col items-center justify-center"> {/* Added padding, transparent bg, flex centering */}
      {/* Content Container */}
      <motion.div
         className="container mx-auto px-4 relative z-10 text-center max-w-6xl w-full" // Added container, padding, centering, increased max-width
         variants={containerVariants}
         initial="hidden"
         whileInView="visible" // Animate on scroll into view
         viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent"> {/* Gradient text */}
          My Resume
        </h2>
        <p className="mb-10 text-lg text-gray-300"> {/* Increased bottom margin */}
          Explore my professional journey and technical expertise below.
        </p>

        {/* Side-by-Side Resume Viewer */}
        <motion.div
           className="flex flex-col md:flex-row justify-center items-center gap-6 w-full" // Flex container for side-by-side display
           variants={resumeViewerVariants} // Apply animation variants
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
           {/* First Resume View */}
           <div className="w-full md:w-1/2 h-[70vh] md:h-[80vh] bg-ai-dark/50 rounded-lg shadow-xl border border-ai-blue/20 overflow-hidden flex items-center justify-center"> {/* Container for iframe, added flex centering */}
              <iframe
                 src="https://mycareervault.s3.ap-south-1.amazonaws.com/Resume.pdf" // Your actual resume PDF URL
                 title="Jarius Raj Singh's Resume - Page 1" // Title for accessibility
                 width="160%" // Full width of container
                 height="116%" // Full height of container
                 style={{ border: 'none', transform: 'scale(0.8)', transformOrigin: 'top center' }} // Scale down and remove border
              >
                 {/* Fallback content if iframe is not supported */}
                 <p className="text-center text-gray-400 p-4">
                     Your browser does not support iframes. You can download the resume here:
                     <a href="https://mycareervault.s3.ap-south-1.amazonaws.com/Resume.pdf" download="JariusRajSingh_Resume.pdf" className="text-ai-blue hover:underline ml-2">Download Resume</a>
                 </p>
              </iframe>
           </div>

           {/* Second Resume View (Duplicate) */}
            <div className="w-full md:w-1/2 h-[70vh] md:h-[80vh] bg-ai-dark/50 rounded-lg shadow-xl border border-ai-blue/20 overflow-hidden flex items-center justify-center"> {/* Container for iframe, added flex centering */}
              <iframe
                 src="https://mycareervault.s3.ap-south-1.amazonaws.com/Resume.pdf" // Your actual resume PDF URL
                 title="Jarius Raj Singh's Resume - Page 2" // Title for accessibility
                 width="100%" // Full width of container
                 height="100%" // Full height of container
                 style={{ border: 'none', transform: 'scale(0.8)', transformOrigin: 'top center' }} // Scale down and remove border
              >
                 {/* Fallback content if iframe is not supported */}
                 <p className="text-center text-gray-400 p-4">
                     Your browser does not support iframes. You can download the resume here:
                     <a href="https://mycareervault.s3.ap-south-1.amazonaws.com/Resume.pdf" download="JariusRajSingh_Resume.pdf" className="text-ai-blue hover:underline ml-2">Download Resume</a>
                 </p>
              </iframe>
           </div>
        </motion.div>
      </motion.div>

       {/* Custom CSS (if any needed) */}
       <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }

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

export default Resume;
