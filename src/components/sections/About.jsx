import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaLightbulb, FaUserGraduate, FaRocket, FaCodeBranch, FaChartLine, FaRobot, FaUser } from 'react-icons/fa';

// AnimationWrapper component for the entire section
const AnimationWrapper = ({ children }) => {
    const wrapperVariants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            variants={wrapperVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

// Placeholder for your image or 3D avatar
const ProfileImage = () => (
    <motion.div
        className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-ai-blue/60 mx-auto md:mx-0 mb-6 md:mb-0 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out cursor-pointer flex-shrink-0"
    >
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
            staggerChildren: 0.2,
        },
    },
};

// Animation variants for individual items/blocks within the container
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Animation variants for the individual cards in the "What I Do" section
const whatIDoCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.08,
            type: 'spring',
            stiffness: 250,
            damping: 20,
        },
    }),
    hover: {
        y: -6,
        boxShadow: '0 8px 16px rgba(255, 0, 150, 0.3)',
        borderColor: 'var(--color-ai-accent, #00ddeb)',
        transition: { duration: 0.3, ease: 'easeInOut' },
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
        <section id="about" className="relative py-12 md:py-20 text-white overflow-hidden font-poppins flex flex-col items-center justify-center min-h-screen">
            {/* Replaced blob background with NeuralNetworkBackground integration */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="neural-network absolute inset-0 opacity-30 mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>
            <div className="fixed inset-0 z-5 bg-ai-dark/50 pointer-events-none" />
            {/* AnimationWrapper wraps the entire content */}
            <AnimationWrapper>
                <motion.div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-screen-xl w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Section Title */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent"
                        variants={itemVariants}
                    >
                        About Me
                    </motion.h2>

                    {/* Two-Column Layout (Image + Right Column Content) */}
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16 mb-10">
                        {/* Left Column: Image */}
                        <motion.div className="md:w-1/4 flex flex-col items-center text-center" variants={itemVariants}>
                            <ProfileImage />
                        </motion.div>

                        {/* Right Column: About Me Text, Quote, and What I Do */}
                        <motion.div
                            className="md:w-3/4 text-left"
                            variants={itemVariants}
                        >
                            {/* Main About Me text */}
                            <p className="text-base text-gray-300 mb-6 leading-relaxed">
                                Hello! I'm Jairus, a passionate Computer Science Engineering student dedicated to Artificial Intelligence. I explore, learn, and build at the forefront of AI innovation, driven by curiosity and a commitment to solving complex problems.
                            </p>

                            {/* Quote with Box UI */}
                            <div className="mt-6 p-4 bg-ai-dark-card rounded-lg shadow-xl border border-ai-blue/30 text-sm text-gray-300 italic max-w-xl mx-auto md:mx-0">
                                "The greatest challenge in AI is not building intelligent machines, but ensuring they align with human values."
                                <p className="text-right mt-2 text-gray-400 text-xs">- A Hard Truth on AI</p>
                            </div>

                            {/* What I Do Section */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-ai-blue-light mb-8 text-center md:text-left">
                                    What I Do
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full md:max-w-none mx-auto">
                                    {whatIDoCardsData.map((card, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-ai-dark p-5 rounded-xl shadow-xl border border-ai-blue/40 flex flex-col items-center text-center hover:shadow-ai-accent/40 hover:border-ai-accent transition-all duration-300 cursor-pointer"
                                            variants={whatIDoCardVariants}
                                            custom={index}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <div className="text-4xl mb-3 text-ai-accent">{card.icon}</div>
                                            <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
                                            <p className="text-xs text-gray-300">{card.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimationWrapper>
        </section>
    );
};

export default About;