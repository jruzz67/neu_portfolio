import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
// Import specific icons from react-icons/fa
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa'; // Added FaGithub for consistency

function Footer() {
  // Animation variants for footer elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for social icons
  const iconVariants = {
    hover: { scale: 1.2, color: 'var(--color-ai-accent, #00ddeb)' }, // Scale up and change color on hover
    tap: { scale: 0.9 }, // Subtle press effect
  };

  return (
    // Reduced padding, adjusted gradient, flex layout with reduced gap
    <motion.footer
      // Reduced vertical padding (py- classes)
      className="py-4 px-6 md:py-6 md:px-8 bg-gradient-to-r from-ai-dark to-ai-dark/80 text-center text-white shadow-inner flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6" // Reduced padding and gap
      initial="hidden"
      whileInView="visible" // Animate when footer comes into view
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
      variants={itemVariants} // Apply item animation to the whole footer container
      style={{
        boxShadow: '0 0 15px rgba(0, 221, 235, 0.3)', // Reduced prominent glow around the footer
      }}
    >
      {/* Portfolio Title */}
      <motion.div className="text-lg md:text-xl font-bold text-ai-blue glow-text" variants={itemVariants}> {/* Reduced font size */}
        Jarius Raj Singh
      </motion.div>

      {/* Copyright Info */}
      <motion.div className="text-sm md:text-base text-gray-400" variants={itemVariants}> {/* Reduced font size */}
        © 2025 All rights reserved.
      </motion.div>

      {/* Social Icons */}
      <motion.div className="flex space-x-4 text-xl md:text-2xl" variants={itemVariants}> {/* Reduced icon size and spacing */}
        {/* LinkedIn Icon */}
        <motion.a
          href="https://www.linkedin.com/in/jairus-raj-singh-s-36302532a" // Replace with your actual LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-ai-blue/70 hover:text-ai-accent transition-colors duration-300" // Styled link
          variants={iconVariants} // Apply icon animation variants
          whileHover="hover" // Apply hover animation
          whileTap="tap" // Apply tap animation
          aria-label="LinkedIn Profile" // Added accessibility label
        >
          <FaLinkedinIn /> {/* Using React Icon component */}
        </motion.a>
        {/* Twitter Icon */}
        <motion.a
          href="https://twitter.com/your-handle" // Replace with your actual Twitter handle link
          target="_blank"
          rel="noopener noreferrer"
          className="text-ai-blue/70 hover:text-ai-accent transition-colors duration-300" // Styled link
          variants={iconVariants} // Apply icon animation variants
          whileHover="hover" // Apply hover animation
          whileTap="tap" // Apply tap animation
          aria-label="Twitter Profile" // Added accessibility label
        >
          <FaTwitter /> {/* Using React Icon component */}
        </motion.a>
        {/* GitHub Icon (Added as it's common in portfolios) */}
         <motion.a
           href="https://github.com/jruzz67" // Replace with your actual GitHub username link
           target="_blank"
           rel="noopener noreferrer"
           className="text-ai-blue/70 hover:text-ai-accent transition-colors duration-300" // Styled link
           variants={iconVariants} // Apply icon animation variants
           whileHover="hover" // Apply hover animation
           whileTap="tap" // Apply tap animation
           aria-label="GitHub Profile" // Added accessibility label
         >
           <FaGithub /> {/* Using React Icon component */}
         </motion.a>
        {/* Email Icon */}
        <motion.a
          href="mailto:your-email@gmail.com" // Replace with your actual email address
          target="_blank"
          rel="noopener noreferrer"
          className="text-ai-blue/70 hover:text-ai-accent transition-colors duration-300" // Styled link
          variants={iconVariants} // Apply icon animation variants
          whileHover="hover" // Apply hover animation
          whileTap="tap" // Apply tap animation
          aria-label="Email Address" // Added accessibility label
        >
          <FaEnvelope /> {/* Using React Icon component */}
        </motion.a>
      </motion.div>

      {/* Custom CSS for glow effects (can be moved to global CSS if preferred) */}
      <style>{`
        .glow-effect {
          box-shadow: 0 0 15px rgba(0, 221, 235, 0.3); /* Reduced glow intensity */
        }
        .glow-text {
          text-shadow: 0 0 6px rgba(0, 221, 235, 0.5); /* Reduced glow intensity on text */
        }
      `}</style>
    </motion.footer>
  );
}

export default Footer;
