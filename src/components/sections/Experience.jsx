import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBuilding, FaCheckCircle, FaStar } from 'react-icons/fa';

function Experience() {
  const [activeView, setActiveView] = useState('Professional');
  
  const experiences = [
    {
      title: "AI Intern",
      company: "Malaris Software Solutions",
      duration: "May 2025 – Jun 2025",
      description: "Internship, Onsite",
      icon: <FaBriefcase />,
      details: [],
    },
    {
      title: "ML Engineer Intern",
      company: "Prodigy Infotech",
      duration: "May 2025",
      description: "Internship, Remote",
      icon: <FaBriefcase />,
      details: [],
    },
    {
      title: "Member",
      company: "IEEE Computer Society & IEEE",
      duration: "Feb 2025 – Present",
      description: "Full-time, 3 mos",
      icon: <FaStar />,
      details: [],
    },
    {
      title: "Data Science Intern",
      company: "CODSoft",
      duration: "Dec 2024 – Jan 2025",
      description: "Internship, Remote",
      icon: <FaBriefcase />,
      details: [],
    },
    // {
    //   title: "Data Science Intern",
    //   company: "TEACHNOOK (TEACHSCAPE ONLINE LEARNING SERVICES PRIVATE LIMITED)",
    //   duration: "Aug 2024 – Sep 2024",
    //   description: "Internship, 2 mos, Remote",
    //   icon: <FaBriefcase />,
    //   details: [],
    // },
    ,
  ];

  const education = [
    {
      institution: "Sri Krishna College of Technology",
      degree: "Bachelor of Engineering – BE, Computer Science",
      duration: "2023 – 2027",
      description: "Grade: 7.91 CGPA (Upto 3rd Semester)",
      icon: <FaGraduationCap />,
      details: [],
    },
    {
      institution: "Rose Mary Matriculation Higher Secondary School",
      duration: "Jun 2008 – Apr 2023",
      description: "Grade: 93.33%",
      icon: <FaGraduationCap />,
      details: [],
    },
    {
      institution: "District Priority Project as Director in Rotaract Club of SKCT",
      duration: "",
      description: "",
      icon: <FaBuilding />,
      details: [],
    },
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: i * 0.1,
      },
    }),
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id="experience" className="relative py-16 md:py-24 bg-transparent text-ai-blue overflow-hidden font-poppins">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-blue rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-accent rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-accent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience & Education
        </motion.h2>

        <div className="flex justify-center mb-12 space-x-6 md:space-x-12">
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border-2 ${
              activeView === 'Professional' ? 'bg-ai-blue text-ai-dark border-ai-blue shadow-glow' : 'bg-transparent text-ai-blue/70 border-ai-blue/30 hover:border-ai-blue/70 hover:text-ai-blue'
            }`}
            onClick={() => setActiveView('Professional')}
          >
            Professional
          </button>
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border-2 ${
              activeView === 'Academics' ? 'bg-ai-blue text-ai-dark border-ai-blue shadow-glow' : 'bg-transparent text-ai-blue/70 border-ai-blue/30 hover:border-ai-blue/70 hover:text-ai-blue'
            }`}
            onClick={() => setActiveView('Academics')}
          >
            Academics
          </button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-ai-blue/40 hidden md:block"></div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              {activeView === 'Professional' ? (
                experiences.map((item, index) => (
                  <motion.div
                    key={item.company + index}
                    className={`relative flex items-center my-8 md:my-12 w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                    variants={index % 2 === 0 ? itemVariants : itemVariantsRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index}
                  >
                    <div className="absolute md:relative z-20 flex items-center order-1 bg-ai-blue shadow-xl w-8 h-8 rounded-full ring-4 ring-ai-dark md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-0 top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:mr-0 mr-4">
                      <div className="mx-auto text-ai-dark text-sm">{item.icon}</div>
                    </div>

                    <div className={`order-1 bg-ai-dark/60 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 backdrop-blur-sm border border-ai-blue/30 hover:border-ai-accent transition-colors duration-300 relative ${index % 2 === 0 ? 'md:mr-auto md:text-right ml-8' : 'md:ml-auto md:text-left mr-8'}`}>
                      <h3 className="mb-1 font-bold text-ai-accent text-xl">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-1">{item.company}</p>
                      <p className="text-ai-blue text-sm mb-3">{item.duration}</p>
                      <p className="text-ai-blue/70 text-sm mb-3">{item.description}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                education.map((item, index) => (
                  <motion.div
                    key={item.institution + index}
                    className={`relative flex items-center my-8 md:my-12 w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                    variants={index % 2 === 0 ? itemVariants : itemVariantsRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index}
                  >
                    <div className="absolute md:relative z-20 flex items-center order-1 bg-ai-blue shadow-xl w-8 h-8 rounded-full ring-4 ring-ai-dark md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-0 top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:mr-0 mr-4">
                      <div className="mx-auto text-ai-dark text-sm">{item.icon}</div>
                    </div>

                    <div className={`order-1 bg-ai-dark/60 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 backdrop-blur-sm border border-ai-blue/30 hover:border-ai-accent transition-colors duration-300 relative ${index % 2 === 0 ? 'md:mr-auto md:text-right ml-8' : 'md:ml-auto md:text-left mr-8'}`}>
                      <h3 className="mb-1 font-bold text-ai-accent text-xl">{item.institution}</h3>
                      {item.degree && <p className="text-gray-400 text-sm mb-1">{item.degree}</p>}
                      <p className="text-ai-blue text-sm mb-3">{item.duration}</p>
                      <p className="text-ai-blue/70 text-sm mb-3">{item.description}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }

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

        .max-w-4xl > .relative > .w-full > .relative {
          flex-direction: column;
          align-items: flex-start;
        }

        .max-w-4xl > .relative > .w-full > .relative > .absolute {
          left: 0;
          transform: translate(-50%, -50%);
          top: 50%;
        }

        .max-w-4xl > .relative > .w-full > .relative > .order-1 {
          width: 100%;
          text-align: left;
          margin-left: 2rem;
          margin-right: 0;
        }

        .max-w-4xl > .relative > .w-full > .relative.md\\:justify-end > .order-1 {
          margin-left: 2rem;
          margin-right: 0;
          text-align: left;
        }

        .max-w-4xl > .relative > .w-full > .relative .items-start {
          justify-content: flex-start;
        }
        .max-w-4xl > .relative > .w-full > .relative .items-start .flex-shrink-0.md\\:ml-2 {
          margin-left: 0;
          margin-right: 0.5rem;
        }

        @media (min-width: 768px) {
          .max-w-4xl > .relative > .w-full > .relative {
            flex-direction: row;
            align-items: center;
          }
          .max-w-4xl > .relative > .w-full > .relative.md\\:flex-row-reverse {
            flex-direction: row-reverse;
          }

          .max-w-4xl > .relative > .w-full > .relative > .absolute {
            position: relative;
            left: 1/2;
            transform: translateX(-50%) translateY(0);
            top: auto;
          }

          .max-w-4xl > .relative > .w-full > .relative > .order-1 {
            width: 5/12;
            margin-left: 0;
            margin-right: 0;
          }

          .max-w-4xl > .relative > .w-full > .relative.md\\:justify-start > .order-1 {
            margin-right: auto;
            text-align: right;
          }
          .max-w-4xl > .relative > .w-full > .relative.md\\:justify-end > .order-1 {
            margin-left: auto;
            text-align: left;
          }

          .max-w-4xl > .relative > .w-full > .relative.md\\:justify-start .items-start {
            justify-content: flex-end;
          }
          .max-w-4xl > .relative > .w-full > .relative.md\\:justify-start .items-start .flex-shrink-0.md\\:ml-2 {
            margin-left: 0.5rem;
            margin-right: 0;
          }
          .max-w-4xl > .relative > .w-full > .relative.md\\:justify-end .items-start {
            justify-content: flex-start;
          }
          .max-w-4xl > .relative > .w-full > .relative.md\\:justify-end .items-start .flex-shrink-0.md\\:mr-2 {
            margin-left: 0;
            margin-right: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Experience;