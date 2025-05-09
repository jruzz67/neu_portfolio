import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaLightbulb, FaUserGraduate, FaRocket, FaCodeBranch, FaChartLine, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.08,
        type: 'spring',
        stiffness: 250,
        damping: 20,
      },
    }),
    hover: {
        y: -10,
        boxShadow: '0 12px 25px rgba(0, 221, 235, 0.4)',
        borderColor: 'var(--color-ai-accent, #00ddeb)',
        transition: { duration: 0.3, ease: 'easeInOut' }
    },
    tap: { scale: 0.95 },
  };

  const coreStrengths = [
    { icon: <FaBrain className="text-ai-accent" />, text: "Deep Learning" },
    { icon: <FaLaptopCode className="text-ai-accent" />, text: "Machine Learning" },
    { icon: <FaLightbulb className="text-ai-accent" />, text: "AI Solutions" },
    { icon: <FaCodeBranch className="text-ai-accent" />, text: "Development & Deployment" },
    { icon: <FaChartLine className="text-ai-accent" />, text: "Data Analysis" },
    { icon: <FaRobot className="text-ai-accent" />, text: "Automation" },
  ];

  const ProfileImage = () => (
    <motion.div
      className="w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-ai-blue/60 mx-auto mb-8 md:mb-0 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out cursor-pointer"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="w-full h-full bg-gradient-to-br from-ai-blue/80 to-ai-accent/80 flex items-center justify-center">
        <FaUserGraduate className="text-6xl text-ai-dark opacity-90" />
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="relative py-16 md:py-24 bg-ai-dark text-white overflow-hidden font-poppins flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-ai-blue rounded-full mix-blend-hard-light filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ai-accent rounded-full mix-blend-hard-light filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-ai-blue rounded-full mix-blend-hard-light filter blur-3xl animate-blob animation-delay-6000 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12 md:mb-16">
          <motion.div className="flex-shrink-0" variants={itemVariants}>
            <ProfileImage />
          </motion.div>
          <motion.div className="md:w-2/3 text-center" variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-ai-blue-light mb-4">
              Jairus - AI Enthusiast & Developer
            </h3>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
              I'm a Computer Science Engineering student passionate about AI. I explore, learn, and build at the forefront of AI innovation, driven by curiosity and a commitment to solving complex problems.
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-ai-blue-light">
            My Core Strengths
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={index}
                className="bg-ai-dark-card p-4 md:p-5 rounded-xl shadow-xl border border-ai-blue/40 flex flex-col items-center text-center hover:shadow-ai-accent/40 hover:border-ai-accent transition-all duration-300 cursor-pointer"
                variants={skillVariants}
                custom={index}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="text-4xl mb-3">{strength.icon}</div>
                <h4 className="text-sm md:text-base font-semibold text-white">{strength.text}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
