  import React, { useState, useMemo, useCallback } from 'react';
  import { Link } from 'react-router-dom';
  import { motion, AnimatePresence } from 'framer-motion';
  import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

  const projectData = [
      { id: 1, title: "AI Emotional Chatbot", shortDescription: "LLM chatbot recognizing 27 emotions.", description: "An LLM-based chatbot recognizing 27 emotions with real-time sentiment analysis, offering empathetic responses and mood tracking capabilities.", tech: ["Python", "LangChain", "Ollama", "NLP", "FastAPI"], image: "/placeholder-image.jpg", projectLink: "/projects/chatbot" },
      { id: 2, title: "AI Twin Mentor Platform", shortDescription: "Personalized study plans with an AI mentor.", description: "An AI-driven platform for personalized study plans featuring an AI Twin Mentor that adapts to learning styles and provides interactive guidance.", tech: ["LLaMA 3", "OpenAI API", "React", "Node.js"], image: "/placeholder-image.jpg", projectLink: "/projects/ai-mentor" },
      { id: 3, title: "DeepSeek Model Deployment", shortDescription: "Scalable deployment of DeepSeek R1.5B.", description: "Streamlined deployment of the DeepSeek R1.5B model using containerization with Docker and orchestration via Kubernetes for scalable AI solutions.", tech: ["Docker", "Ollama", "Kubernetes"], image: "/placeholder-image.jpg", projectLink: "/projects/deepseek" },
      { id: 4, title: "CV Object Detection", shortDescription: "Real-time object detection pipeline.", description: "Developed a high-performance, real-time object detection pipeline utilizing YOLOv8 and OpenCV, optimized for various hardware.", tech: ["Python", "OpenCV", "YOLO", "CUDA"], image: "/placeholder-image.jpg", projectLink: "/projects/cv-detection" },
      { id: 5, title: "NLP Sentiment API", shortDescription: "RESTful API for text sentiment analysis.", description: "Built a robust RESTful API for analyzing sentiment in text data, incorporating advanced NLP techniques with NLTK and spaCy.", tech: ["Python", "Flask", "NLTK", "spaCy"], image: "/placeholder-image.jpg", projectLink: "/projects/nlp-api" },
      { id: 6, title: "Reinforcement Learning Agent for Game Play", shortDescription: "Implemented a reinforcement learning agent using TensorFlow and OpenAI Gym to master complex strategies in simulated game environments.", tech: ["Python", "TensorFlow", "RL", "Gym"] },
  ];

  const sectionVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const introParagraphVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: 'easeOut' } },
  };

  const carouselWrapperVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.3, ease: 'easeOut' } },
  };

  const cardVariants = {
      enter: (direction) => ({
          x: direction > 0 ? '100%' : '-100%',
          opacity: 0,
          scale: 0.7,
          rotateY: direction > 0 ? -60 : 60,
          zIndex: 0,
      }),
      center: {
          x: '0%',
          opacity: 1,
          scale: 1,
          rotateY: 0,
          zIndex: 3,
      },
      left: {
          x: '-65%',
          opacity: 0.6,
          scale: 0.8,
          rotateY: 40,
          zIndex: 2,
      },
      right: {
          x: '65%',
          opacity: 0.6,
          scale: 0.8,
          rotateY: -40,
          zIndex: 2,
      },
      exit: (direction) => ({
          x: direction < 0 ? '100%' : '-100%',
          opacity: 0,
          scale: 0.7,
          rotateY: direction < 0 ? -60 : 60,
          zIndex: 0,
      }),
  };

  const cardTransition = {
      type: "spring",
      stiffness: 260,
      damping: 30,
  };

  const viewAllButtonVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
      hover: { scale: 1.03, boxShadow: '0 0 15px rgba(0, 221, 235, 0.4)' },
      tap: { scale: 0.97 },
  };

  const ProjectCard = React.memo(({ project, position, direction, isInteractive }) => {
      const isCenter = position === 'center';

      return (
          <motion.div
              key={project.id}
              className={`absolute w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] aspect-[16/10] rounded-xl shadow-xl overflow-hidden
                          border ${isCenter ? 'border-ai-accent/70' : 'border-ai-blue/20'}
                          ${isInteractive ? 'cursor-pointer' : ''}
                          bg-ai-dark/60 backdrop-blur-lg group
                          {/* Original widths: w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%] */}`}
              variants={cardVariants}
              initial="enter"
              animate={position}
              exit="exit"
              custom={direction}
              transition={cardTransition}
              style={{
                  left: '50%',
                  top: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  pointerEvents: isInteractive ? 'auto' : 'none',
                  transformOrigin: 'center center',
              }}
              whileHover={isInteractive ? {
                  scale: 1.03,
                  borderColor: 'var(--color-ai-accent, #00ddeb)',
                  boxShadow: '0px 0px 35px rgba(0, 221, 235, 0.4)',
              } : {}}
          >
              <div className="relative w-full h-full flex flex-col">
                  {project.image && (
                      <div className="w-full h-2/5 overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                      </div>
                  )}
                  <div className={`p-4 md:p-5 flex flex-col flex-grow ${!project.image ? 'justify-between' : ''}`}>
                      <div>
                          <h3 className={`text-md md:text-lg font-bold mb-1 truncate ${isCenter ? 'text-ai-accent' : 'text-white/90'}`} title={project.title}>
                              {project.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-300/80 line-clamp-2 mb-3">
                              {project.shortDescription || project.description}
                          </p>
                      </div>

                      <div className="mt-auto">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                              {project.tech.slice(0, 3).map((tech, i) => (
                                  <span key={i} className={`px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium border
                                              ${isCenter ? 'bg-ai-accent/10 text-ai-accent border-ai-accent/30'
                                                  : 'bg-ai-blue/10 text-ai-blue-light border-ai-blue/30'}`}>
                                      {tech}
                                  </span>
                              ))}
                              {project.tech.length > 3 && (
                                  <span className={`px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium border ${isCenter ? 'bg-ai-accent/10 text-ai-accent border-ai-accent/30' : 'bg-ai-blue/10 text-ai-blue-light border-ai-blue/30'}`}>
                                      +{project.tech.length - 3}
                                  </span>
                              )}
                          </div>
                          {isCenter && project.projectLink && (
                              <Link
                                  to={project.projectLink}
                                  className="inline-flex items-center text-sm text-ai-accent hover:underline font-semibold group/link"
                                  onClick={(e) => e.stopPropagation()}
                              >
                                  View Project
                                  <FaArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                              </Link>
                          )}
                      </div>
                  </div>
              </div>
          </motion.div>
      );
  });

  function Projects() {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [direction, setDirection] = useState(0);

      const numProjects = projectData.length;

      const handleNext = useCallback(() => {
          setDirection(1);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % numProjects);
      }, [numProjects]);

      const handlePrev = useCallback(() => {
          setDirection(-1);
          setCurrentIndex((prevIndex) => (prevIndex - 1 + numProjects) % numProjects);
      }, [numProjects]);

      const visibleProjects = useMemo(() => {
          if (numProjects === 0) return [];

          const getProjectWithPosition = (index, position) => ({
              ...projectData[index % numProjects],
              id: `${projectData[index % numProjects].id}-${position}`,
              position,
          });

          if (numProjects === 1) {
              return [getProjectWithPosition(0, 'center')];
          }
          if (numProjects === 2) {
              return [
                  getProjectWithPosition(currentIndex, 'center'),
                  getProjectWithPosition(currentIndex + 1, 'right'),
              ];
          }

          const leftIndex = (currentIndex - 1 + numProjects) % numProjects;
          const centerIndex = currentIndex;
          const rightIndex = (currentIndex + 1) % numProjects;

          return [
              getProjectWithPosition(leftIndex, 'left'),
              getProjectWithPosition(centerIndex, 'center'),
              getProjectWithPosition(rightIndex, 'right'),
          ];
      }, [currentIndex, numProjects]);

      React.useEffect(() => {
          const handleKeyDown = (event) => {
              if (numProjects < 2) return;
              if (event.key === 'ArrowRight') handleNext();
              else if (event.key === 'ArrowLeft') handlePrev();
          };
          window.addEventListener('keydown', handleKeyDown);
          return () => window.removeEventListener('keydown', handleKeyDown);
      }, [handleNext, handlePrev, numProjects]);

      return (
          <section id="projects" className="relative py-20 md:py-28 bg-transparent text-white overflow-hidden font-poppins flex flex-col items-center justify-center min-h-screen">
              <motion.div
                  className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-6xl w-full"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
              >
                  <h2 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent">
                      My AI Creations
                  </h2>
                  <motion.p
                      className="text-gray-300/90 mb-6 md:mb-8 text-lg md:text-xl max-w-2xl mx-auto"
                      variants={introParagraphVariants}
                  >
                      Exploring the frontiers of AI, one project at a time. Here’s a glimpse into my work.
                  </motion.p>

                  <div className="relative">
                      <motion.div
                          className="h-[420px] sm:h-[460px] md:h-[475px] flex items-center justify-center mb-8 md:mb-10"
                          variants={carouselWrapperVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                          style={{ perspective: '1000px' }}
                      >
                          {numProjects > 0 ? (
                              <AnimatePresence initial={false} mode="sync" custom={direction}>
                                  {visibleProjects.map((project) => (
                                      <ProjectCard
                                          key={project.id}
                                          project={project}
                                          position={project.position}
                                          direction={direction}
                                          isInteractive={project.position === 'center'}
                                      />
                                  ))}
                              </AnimatePresence>
                          ) : (
                              <p className="text-gray-400 text-xl">More projects coming soon!</p>
                          )}
                      </motion.div>

                      {numProjects > 1 && (
                          <>
                              <button
                                  onClick={handlePrev}
                                  className="absolute -left-12 sm:-left-16 md:-left-20 lg:-left-24 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-ai-blue to-ai-accent/50 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-ai-accent/70 hover:scale-110 hover:from-ai-blue/80 hover:to-ai-accent/80"
                                  aria-label="Previous Project"
                              >
                                  <FaArrowLeft className="h-7 w-7 transition-transform duration-300" />
                              </button>
                              <button
                                  onClick={handleNext}
                                  className="absolute -right-12 sm:-right-16 md:-right-20 lg:-right-24 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-ai-blue to-ai-accent/50 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-ai-accent/70 hover:scale-110 hover:from-ai-blue/80 hover:to-ai-accent/80"
                                  aria-label="Next Project"
                              >
                                  <FaArrowRight className="h-7 w-7 transition-transform duration-300" />
                              </button>
                          </>
                      )}
                  </div>

                  <motion.div className="text-center mt-6" variants={viewAllButtonVariants}>
                      <Link
                          to="/all-projects"
                          className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-ai-blue to-ai-accent text-white font-semibold rounded-lg shadow-md hover:shadow-ai-accent/30 transition-all duration-300 transform hover:scale-105 group focus:outline-none focus:ring-4 focus:ring-ai-accent/40 text-sm md:text-base"
                      >
                          <span>View All Projects</span>
                          <FaArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                  </motion.div>
              </motion.div>
          </section>
      );
  }

  export default Projects;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const projects = [
//   { id: 1, title: "AI-Powered Emotional Companion Chatbot", description: "An LLM-based chatbot recognizing 27 emotions with real-time sentiment analysis", tech: ["Python", "LangChain", "Ollama (Mistral:7B)", "NLP", "FastAPI"] },
//   { id: 2, title: "Personalized Educational Platform with AI Twin Mentor", description: "An AI-driven platform for personalized study plans featuring an AI Twin Mentor", tech: ["Ollama (LLaMA 3)", "OpenAI API"] },
//   { id: 3, title: "DeepSeek R1:1.5b Model Deployment", description: "Deployment of the DeepSeek R1.5B model using containerization for scalable AI solutions", tech: ["Docker", "Ollama"] },
// ];

// function Projects() {
//   const [currentProject, setCurrentProject] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentProject((prev) => (prev + 1) % projects.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-12 text-white min-h-screen animate-fade-in">
//       <h2 className="text-5xl font-bold text-ai-blue mb-8">Projects</h2>
//       <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             className={`absolute w-full h-full p-6 bg-ai-dark/50 rounded-lg border-2 border-ai-blue/20 shadow-md transition-all duration-500 ${
//               index === currentProject ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}
//           >
//             <h3 className="text-3xl font-bold text-ai-accent">{project.title}</h3>
//             <p className="text-gray-300">{project.description}</p>
//             <div className="flex gap-2 mt-4">
//               {project.tech.map((tech, i) => (
//                 <span key={i} className="px-3 py-1 bg-ai-blue/30 rounded-full text-sm">{tech}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <Link to="/projects" className="mt-8 inline-block px-6 py-3 bg-ai-blue text-ai-dark hover:bg-ai-blue/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//         View All Projects
//       </Link>
//     </div>
//   );
// }

// export default Projects;