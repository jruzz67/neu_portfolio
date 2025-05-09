import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaLightbulb, FaUserGraduate, FaRocket, FaCodeBranch, FaChartLine, FaRobot, FaUser } from 'react-icons/fa'; // Using relevant icons

// Placeholder for your image or 3D avatar
const ProfileImage = () => (
  <motion.div
    // Image size kept as requested, adjusted margin for desktop alignment
    className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-ai-blue/60 mx-auto md:mx-0 mb-6 md:mb-0 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out cursor-pointer flex-shrink-0"
    // Removed variants and initial/whileInView here to be controlled by the parent containerVariants
  >
    {/* Replace with your actual image or a placeholder. For a tech look, an abstract graphic or stylized avatar works too. */}
    {/* <img src={profileImage} alt="Jairus" className="w-full h-full object-cover" /> */}
    {/* Placeholder with gradient background and icon */}
    <div className="w-full h-full bg-gradient-to-br from-ai-blue/80 to-ai-accent/80 flex items-center justify-center">
      <FaUserGraduate className="text-6xl text-ai-dark opacity-90" />
    </div>
  </motion.div>
);

// --- Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 },
    },
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

// Animation variants for individual items/blocks within the container
const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced y offset
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }, // Reduced duration
};

// Animation variants for the individual cards in the "What I Do" section
const whatIDoCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.08, // Slightly faster stagger delay
            type: 'spring',
            stiffness: 250, // Adjusted stiffness
            damping: 20, // Adjusted damping
        },
    }),
    hover: {
        y: -6, // Reduced lift on hover
        boxShadow: '0 8px 16px rgba(255, 0, 150, 0.3)', // Reduced glow intensity
        borderColor: 'var(--color-ai-accent, #00ddeb)',
        transition: { duration: 0.3, ease: 'easeInOut' }
    },
    tap: { scale: 0.95 },
};

// --- What I Do Card Data ---
const whatIDoCardsData = [
    { icon: <FaCodeBranch />, title: "AI Development", description: "Building intelligent systems that learn and adapt to solve complex problems." },
    { icon: <FaLightbulb />, title: "Innovation", description: "Exploring new technologies to push the boundaries of what's possible with AI." },
    { icon: <FaBrain />, title: "Research", description: "Staying at the cutting edge of AI research and implementation techniques." },
];


const About = () => {

    return (
        // Reduced vertical padding to make the section less tall
        // Added items-center to vertically center the flex container content
        <section id="about" className="relative py-12 md:py-20 bg-ai-dark text-white overflow-hidden font-poppins flex flex-col items-center justify-center min-h-screen">
            {/* Subtle background elements - sizes adjusted to fit wider layout */}
            <div className="absolute inset-0 z-0 opacity-15">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ai-blue rounded-full mix-blend-hard-light filter blur-2xl animate-blob animation-delay-4000"></div> {/* Adjusted size */}
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-ai-accent rounded-full mix-blend-hard-light filter blur-2xl animate-blob animation-delay-2000"></div> {/* Adjusted size */}
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-ai-blue rounded-full mix-blend-hard-light filter blur-2xl animate-blob animation-delay-6000 transform -translate-x-1/2 -translate-y-1/2"></div> {/* Adjusted size */}
            </div>

            {/* Content Container - Increased max-width to fill horizontal space */}
            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-screen-xl w-full" // Increased max-width significantly
                variants={containerVariants} // Use containerVariants here
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent"
                    variants={itemVariants} // Apply item animation
                >
                    About Me
                </motion.h2>

                {/* Two-Column Layout (Image + Right Column Content) */}
                {/* Added items-center to vertically center the content in the flex container */}
                {/* Reduced bottom margin */}
                <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16 mb-10"> {/* Changed md:items-start to md:items-center */}
                    {/* Left Column: Image */}
                    {/* Reduced width to give more space to the right column */}
                    <motion.div className="md:w-1/4 flex flex-col items-center text-center" variants={itemVariants}>
                        <ProfileImage /> {/* Profile Image Component */}
                    </motion.div>

                    {/* Right Column: About Me Text, Quote, and What I Do */}
                    {/* Increased width to occupy more horizontal space */}
                    {/* Removed background, padding, rounded corners, shadow, border for the outer box */}
                    <motion.div
                        className="md:w-3/4 text-left"
                        variants={itemVariants} // Apply item animation
                    >
                        {/* Removed Name and Title */}
                        {/* Removed "Who I Am" heading */}

                        {/* Main About Me text */}
                        <p className="text-base text-gray-300 mb-6 leading-relaxed">
                            Hello! I'm Jairus, a passionate Computer Science Engineering student dedicated to Artificial Intelligence. I explore, learn, and build at the forefront of AI innovation, driven by curiosity and a commitment to solving complex problems.
                        </p>

                         {/* Quote with Box UI */}
                         {/* Added background, padding, rounded corners, shadow, border for the box UI */}
                         {/* Adjusted max-width to allow it to be wider in the expanded column */}
                         {/* Adjusted margin top */}
                         <div className="mt-6 p-4 bg-ai-dark-card rounded-lg shadow-xl border border-ai-blue/30 text-sm text-gray-300 italic max-w-xl mx-auto md:mx-0"> {/* Increased max-width and added box styling */}
                             "The greatest challenge in AI is not building intelligent machines, but ensuring they align with human values." {/* Updated quote */}
                             <p className="text-right mt-2 text-gray-400 text-xs">- A Hard Truth on AI</p> {/* Updated quote source */}
                         </div>

                         {/* What I Do Section (Moved inside the right column) */}
                         {/* Adjusted margin top */}
                         <div className="mt-10">
                             <h3 className="text-2xl font-bold text-ai-blue-light mb-8 text-center md:text-left">
                                 What I Do
                             </h3>
                             {/* Grid for What I Do Cards - Adjusted columns to fit wider space */}
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full md:max-w-none mx-auto">
                                 {whatIDoCardsData.map((card, index) => (
                                     <motion.div
                                         key={index}
                                         className="bg-ai-dark p-5 rounded-xl shadow-xl border border-ai-blue/40 flex flex-col items-center text-center hover:shadow-ai-accent/40 hover:border-ai-accent transition-all duration-300 cursor-pointer"
                                         variants={whatIDoCardVariants} // Apply specific card animation variants
                                         custom={index} // For stagger delay
                                         whileHover="hover" // Apply hover animation
                                         whileTap="tap" // Apply tap animation
                                     >
                                         {/* Icon */}
                                         <div className="text-4xl mb-3 text-ai-accent">{card.icon}</div>
                                         {/* Title */}
                                         <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
                                         {/* Description */}
                                         <p className="text-xs text-gray-300">{card.description}</p>
                                     </motion.div>
                                 ))}
                             </div>
                         </div>
                    </motion.div>
                </div>
            </motion.div>
             {/*
             Ensure your Tailwind config has these colors (or similar):
             ai-dark: '#111827', // Example: Tailwind gray-900
             ai-dark-card: '#1f2937', // Example: Tailwind gray-800
             ai-blue: '#3b82f6', // Example: Tailwind blue-500
             ai-blue-light: '#60a5fa', // Example: Tailwind blue-400
             ai-accent: '#06b6d4', // Example: Tailwind cyan-500 (or your pink color)
             ai-accent-light: '#22d3ee', // Example: Tailwind cyan-400 (or a lighter pink)
             */}
             {/* Font import and keyframes for blob animation should be global (e.g., in index.css or App.jsx) */}
        </section>
    );
};

export default About;
