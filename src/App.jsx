import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimationWrapper from './components/layout/AnimationWrapper';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import ProjectList from './components/pages/ProjectList';
import ProjectDetail from './components/pages/ProjectDetail';
import ChatBot from './components/features/ChatBot';
import Footer from './components/layout/Footer';
import Contact from './components/sections/Contact';
import Skills from './components/sections/Skills';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <AnimationWrapper>
        <Navbar />
        <div className="min-h-screen pt-[64px]"> {/* Adjusted to a fixed 64px to match Navbar height */}
          <Routes>
            <Route path="/" element={
              <div className="relative">
                <section id="home" className="min-h-screen">
                  <Home setIsChatOpen={setIsChatOpen} />
                </section>
                <section id="skills" className="min-h-screen">
                  <Skills />
                </section>
                <section id="projects" className="min-h-screen">
                  <Projects />
                </section>
                <section id="resume" className="min-h-screen">
                  <div className="p-12 text-white">
                    <h2 className="text-5xl font-bold text-ai-blue mb-8">Resume</h2>
                    <a
                      href="https://your-aws-s3-bucket.s3.amazonaws.com/your-resume.pdf"
                      download="your-resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-ai-blue text-ai-dark hover:bg-ai-blue/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Download Resume
                    </a>
                  </div>
                </section>
                <section id="contact" className="min-h-screen">
                  <Contact />
                </section>
                <Footer />
              </div>
            } />
            <Route path="/experience" element={
              <div className="p-12 text-white min-h-screen">
                <h1 className="text-5xl font-bold text-ai-blue mb-8">Experience</h1>
                <Experience />
              </div>
            } />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
        <ChatBot isOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      </AnimationWrapper>
    </Router>
  );
}

export default App;