import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
// Import relevant icons from react-icons/fa or other collections
import { FaPython, FaJava, FaDatabase, FaDocker, FaBrain, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux } from 'react-icons/fa'; // Example icons
// Corrected: Replaced SiMatplotlib with SiPlotly and SiPowerbi with SiChartdotjs
import { SiScikitlearn, SiPlotly, SiTensorflow, SiFastapi, SiLangchain, SiChartdotjs } from 'react-icons/si'; // Example icons from Simple Icons

function Skills() {
  // Enhanced data structure with icons
  const skills = [
    { name: "Python", icon: <FaPython className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "Java", icon: <FaJava className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "SQL", icon: <FaDatabase className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "Docker", icon: <FaDocker className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "Ollama", icon: <FaBrain className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    // Add more skills with icons as needed
    { name: "React", icon: <FaReact className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "JavaScript", icon: <FaJs className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "Linux", icon: <FaLinux className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
  ];

  const tools = [
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    // Changed Matplotlib icon to Plotly
    { name: "Matplotlib", icon: <SiPlotly className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    { name: "LangChain", icon: <SiLangchain className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
    // Changed Power BI icon to Chart.js
    { name: "Power BI", icon: <SiChartdotjs className="text-ai-blue group-hover:text-ai-accent transition-colors duration-300" /> },
  ];

  // Animation variants for the main section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for the grid container (staggers children)
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Stagger animation for grid items
      },
    },
  };

  // Animation variants for individual skill/tool items
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.1, boxShadow: '0 0 15px rgba(0, 221, 235, 0.4)' }, // Subtle scale and glow on hover
    tap: { scale: 0.95 },
  };

  return (
    // Set background to transparent to allow AnimationWrapper background
    <section id="skills" className="relative py-16 md:py-24 bg-transparent text-white overflow-hidden font-poppins">

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent" // Gradient text
          initial="hidden"
          whileInView="visible" // Animate on scroll into view
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          Skills & Tools
        </motion.h2>

         {/* Introductory Paragraph */}
         <motion.p
            className="text-gray-300 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
         >
            A glimpse into the technologies and tools I leverage in my journey through AI, ML, and Data Science.
         </motion.p>

        <div className="space-y-12 md:space-y-16"> {/* Increased space between sections */}
          {/* Professional Skillset Section */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             variants={sectionVariants} // Animate the section title and grid container together
          >
            <h3 className="text-3xl text-ai-blue mb-8 text-center md:text-left">Professional Skillset</h3> {/* Centered on mobile, left on desktop */}
            <motion.div
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8" // Responsive grid columns and increased gap
               variants={gridContainerVariants} // Stagger grid item animations
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group p-6 bg-ai-dark/50 rounded-lg border border-ai-blue/20 hover:border-ai-accent hover:bg-ai-blue/10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center space-y-3 cursor-pointer" // Enhanced styling, added group class, flex column
                  variants={itemVariants} // Apply item animation
                  whileHover="hover" // Apply hover animation
                  whileTap="tap" // Apply tap animation
                >
                   {/* Skill Icon */}
                   <div className="text-4xl mb-2"> {/* Icon size */}
                       {skill.icon}
                   </div>
                   {/* Skill Name */}
                   <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 text-center">{skill.name}</span> {/* Text styling */}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools I Use Section */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             variants={sectionVariants} // Animate the section title and grid container together
          >
            <h3 className="text-3xl text-ai-blue mb-8 text-center md:text-left">Tools I Use</h3> {/* Centered on mobile, left on desktop */}
            <motion.div
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8" // Responsive grid columns and increased gap
               variants={gridContainerVariants} // Stagger grid item animations
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="group p-6 bg-ai-dark/50 rounded-lg border border-ai-blue/20 hover:border-ai-accent hover:bg-ai-blue/10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center space-y-3 cursor-pointer" // Enhanced styling, added group class, flex column
                  variants={itemVariants} // Apply item animation
                  whileHover="hover" // Apply hover animation
                  whileTap="tap" // Apply tap animation
                >
                   {/* Tool Icon */}
                   <div className="text-4xl mb-2"> {/* Icon size */}
                       {tool.icon}
                   </div>
                   {/* Tool Name */}
                   <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 text-center">{tool.name}</span> {/* Text styling */}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

       {/* Custom CSS for animations (if any needed, though framer-motion handles most now) */}
       {/* Corrected: Changed style jsx to style */}
       <style>{`
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

export default Skills;
