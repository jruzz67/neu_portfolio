import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'; // Using Font Awesome icons

function Contact() {
  // State and handlers for hovered field are no longer strictly necessary
  // since we removed the state-based glow, but keeping them doesn't hurt.
  const [hoveredField, setHoveredField] = useState(null);
  const handleHover = (field) => setHoveredField(field);
  const handleLeave = () => setHoveredField(null);

  // Animation variants for section title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  // Animation variants for the main content container (staggers children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for direct children
      },
    },
  };

  // Animation variants for individual items (like contact info lines or form fields)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Animation variants for icons (subtle scale/rotate)
  const iconVariants = {
      hover: { scale: 1.2, rotate: 10 },
      tap: { scale: 0.9 },
  }


  return (
    // Changed background to transparent to allow AnimationWrapper background
    <section id="contact" className="relative py-16 md:py-24 bg-transparent text-ai-blue overflow-hidden font-poppins">
      {/* Removed internal Neural Network Background div as it's handled by AnimationWrapper */}
      {/* <div className="absolute inset-0 opacity-30 neural-network-bg"></div> */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent" // Using gradient text
          initial="hidden"
          whileInView="visible" // Animate on scroll into view
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 text-center max-w-2xl mx-auto" // Added max-width for better readability
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Have a project in mind? Let's bring your ideas to life.
        </motion.p>

        {/* Two-column layout container - Using containerVariants for staggered children */}
        <motion.div
           className="flex flex-col md:flex-row justify-center gap-8 md:gap-12" // Adjusted gap and centering
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >

          {/* Contact Information Block - Removed box styling */}
          <motion.div
            // Adjusted width for balance in two-column layout
            className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-0" // Removed bg, shadow, border, backdrop-blur, adjusted padding
            variants={itemVariants} // Apply item animation
          >
             <h3 className="text-3xl font-bold text-ai-accent mb-6">Let’s Connect</h3> {/* Title */}
             <p className="text-gray-300 mb-8">I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

            <div className="space-y-6 text-lg"> {/* Increased spacing and text size */}
              <motion.div className="flex items-start" variants={itemVariants}> {/* Apply item animation */}
                <motion.span variants={iconVariants} whileHover="hover" whileTap="tap"> {/* Apply icon animation */}
                   <FaEnvelope className="text-ai-blue mr-4 text-xl flex-shrink-0" /> {/* Larger icon */}
                </motion.span>
                <span className="text-gray-300 break-words">jairus1567@gmail.com</span> {/* Added break-words */}
              </motion.div>
              <motion.div className="flex items-start" variants={itemVariants}> {/* Apply item animation */}
                 <motion.span variants={iconVariants} whileHover="hover" whileTap="tap"> {/* Apply icon animation */}
                    <FaMapMarkerAlt className="text-ai-blue mr-4 text-xl flex-shrink-0" /> {/* Larger icon */}
                 </motion.span>
                <span className="text-gray-300 break-words">Coimbatore, Tamilnadu, India</span> {/* Added India and break-words */}
              </motion.div>
               {/* Added Phone Number */}
               <motion.div className="flex items-start" variants={itemVariants}> {/* Apply item animation */}
                 <motion.span variants={iconVariants} whileHover="hover" whileTap="tap"> {/* Apply icon animation */}
                    <FaPhoneAlt className="text-ai-blue mr-4 text-xl flex-shrink-0" />
                 </motion.span>
                 <span className="text-gray-300 break-words">+91 8903090599</span>
               </motion.div>
            </div>

            <div className="mt-8"> {/* Increased top margin */}
              <div className="flex space-x-6 text-3xl"> {/* Increased icon size and spacing */}
                <motion.a
                  href="https://github.com/yourusername" // Replace with your actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ai-blue/70 hover:text-ai-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2 }} // Scale animation on hover
                  whileTap={{ scale: 0.9 }} // Press animation
                  aria-label="GitHub" // Added accessibility label
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourprofile" // Replace with your actual LinkedIn link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ai-blue/70 hover:text-ai-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                   aria-label="LinkedIn" // Added accessibility label
                >
                  <FaLinkedinIn /> {/* Used FaLinkedinIn for a slightly different style */}
                </motion.a>
                <motion.a
                  href="https://twitter.com/yourhandle" // Replace with your actual Twitter link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ai-blue/70 hover:text-ai-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                   aria-label="Twitter" // Added accessibility label
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href="https://instagram.com/yourhandle" // Replace with your actual Instagram link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ai-blue/70 hover:text-ai-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                   aria-label="Instagram" // Added accessibility label
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>
          </motion.div>


          {/* Send Message Form - Boxed */}
          <motion.div
            // Adjusted width class for balance in two-column layout
            className="w-full md:w-1/2 lg:w-1/2 bg-ai-dark/60 p-8 rounded-lg shadow-2xl border border-ai-blue/30 backdrop-blur-sm" // Enhanced styling
            variants={itemVariants} // Apply item animation
          >
            <h3 className="text-3xl font-bold text-ai-accent mb-8 text-center">Send a Message</h3> {/* Changed color to accent, centered title */}
            <form className="space-y-6">
              {/* Name and Email row */}
              <motion.div className="flex flex-col md:flex-row gap-6" variants={itemVariants}> {/* Apply item animation */}
                <div className="w-full md:w-1/2">
                  <label htmlFor="name" className="text-ai-blue/80 block mb-2 text-sm font-semibold">Your Name</label> {/* Styled label */}
                  <input
                    type="text"
                    id="name" // Added id for accessibility
                    className="w-full p-3 bg-ai-dark/50 text-white rounded-md border border-ai-blue/30 focus:border-ai-accent focus:ring-1 focus:ring-ai-accent/50 outline-none transition-all duration-300 text-sm" // Styled input
                    placeholder="Enter your name" // Updated placeholder
                    onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 221, 235, 0.2)'} // Subtle focus glow
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="text-ai-blue/80 block mb-2 text-sm font-semibold">Your Email</label> {/* Styled label */}
                  <input
                    type="email"
                    id="email" // Added id for accessibility
                    className="w-full p-3 bg-ai-dark/50 text-white rounded-md border border-ai-blue/30 focus:border-ai-accent focus:ring-1 focus:ring-ai-accent/50 outline-none transition-all duration-300 text-sm" // Styled input
                    placeholder="Enter your email" // Updated placeholder
                    onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 221, 235, 0.2)'} // Subtle focus glow
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  />
                </div>
              </motion.div>

              {/* Phone (Optional) field - Re-added from the image */}
               <motion.div variants={itemVariants}> {/* Apply item animation */}
                 <label htmlFor="phone" className="text-ai-blue/80 block mb-2 text-sm font-semibold">Your Phone (Optional)</label> {/* Styled label */}
                 <input
                   type="tel" // Use type="tel" for phone numbers
                   id="phone" // Added id for accessibility
                   className="w-full p-3 bg-ai-dark/50 text-white rounded-md border border-ai-blue/30 focus:border-ai-accent focus:ring-1 focus:ring-ai-accent/50 outline-none transition-all duration-300 text-sm" // Styled input
                   placeholder="Enter your phone number" // Updated placeholder
                   onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 221, 235, 0.2)'} // Subtle focus glow
                   onBlur={(e) => e.target.style.boxShadow = 'none'}
                 />
               </motion.div>

              {/* Message textarea */}
              <motion.div variants={itemVariants}> {/* Apply item animation */}
                <label htmlFor="message" className="text-ai-blue/80 block mb-2 text-sm font-semibold">Your Message</label> {/* Styled label */}
                <textarea
                  id="message" // Added id for accessibility
                  className="w-full p-3 bg-ai-dark/50 text-white rounded-md border border-ai-blue/30 focus:border-ai-accent focus:ring-1 focus:ring-ai-accent/50 outline-none transition-all duration-300 text-sm" // Styled textarea
                  placeholder="Enter your message" // Updated placeholder
                  rows="6" // Increased rows slightly
                  onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 221, 235, 0.2)'} // Subtle focus glow
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-ai-blue text-ai-dark font-semibold hover:bg-ai-blue/90 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ai-blue/50 flex items-center justify-center space-x-2" // Styled button, added flex/center for icon
                whileHover={{ boxShadow: '0 0 20px rgba(0, 221, 235, 0.5)' }} // Enhanced hover glow
                whileTap={{ scale: 0.98 }} // Press animation
              >
                 <span>Send Message</span>
                 <FaEnvelope className="text-ai-dark text-sm" /> {/* Added icon to button */}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
       {/* Custom CSS for animations */}
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

        .shadow-glow {
          box-shadow: 0 0 15px rgba(0, 221, 235, 0.4);
        }

        /* Custom focus glow for inputs - using inline style now */
        /* .input-focus-glow:focus {
           box-shadow: 0 0 10px rgba(0, 221, 235, 0.2);
           outline: none;
        } */
      `}</style>
    </section>
  );
}

export default Contact;
