import React, { useState, useEffect } from 'react'; // Added useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Removed motion import as it's no longer used directly in App.jsx for the removed section
// import { motion } from 'framer-motion';

// Layout Components
import AnimationWrapper from './components/layout/AnimationWrapper';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section/Page Components
import Home from './components/sections/Home';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects'; // This is the featured projects section on the homepage
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
// Removed import for the separate Resume component
// import Resume from './components/sections/Resume';

import ProjectList from './components/pages/ProjectList'; // This is the dedicated all projects page
import ProjectDetail from './components/pages/ProjectDetail';

// Feature Components
import ChatBot from './components/features/ChatBot';
// Assuming LoadingScreen.js is in components/pages/ as per your comment
import LoadingScreen from './components/pages/LoadingScreen';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  // State to manage loading screen, initialized to true
  const [isLoading, setIsLoading] = useState(true);

  // Callback function for when the loading screen has finished
  // This function is called by the LoadingScreen component
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Optional: If you want to ensure the loading screen shows for a minimum duration
  // or if you have actual data to fetch, you might use useEffect here.
  // For now, the LoadingScreen's internal timing will dictate its visibility.
  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
          // setIsLoading(false); // Don't set here if using LoadingScreen's own onLoaded
      }
    }, 2000); // Minimum 2 seconds

    return () => clearTimeout(timer);
  }, [isLoading]);
  */

  // Removed animation variants for the resume section as it's no longer here
  // const resumeTextVariants = { ... };
  // const buttonVariants = { ... };


  // Conditional render: Show LoadingScreen if isLoading is true
  if (isLoading) {
    // Pass the callback to the LoadingScreen component
    return <LoadingScreen onLoaded={handleLoadingComplete} />;
  }

  // If isLoading is false, render the main application content
  return (
    <Router>
      <AnimationWrapper>
        <Navbar />
        {/* Adjusted to a fixed 64px to match Navbar height */}
        <div className="min-h-screen pt-[64px]">
          <Routes>
            {/* Route for the homepage, including all sections */}
            <Route path="/" element={
              <div className="relative"> {/* This div is likely for managing scroll-spy or layout */}
                <section id="home" className="min-h-screen">
                  <Home setIsChatOpen={setIsChatOpen} />
                </section>
                <section id="skills" className="min-h-screen">
                  <Skills />
                </section>
                <section id="projects" className="min-h-screen">
                  {/* This 'Projects' component is the one used on the homepage for a quick overview */}
                  <Projects />
                </section>
                   {/* Removed the separate Resume section */}
                   {/* <section id="resume" className="relative py-16 md:py-24 bg-transparent text-white overflow-hidden font-poppins flex items-center justify-center"> ... </section> */}
                <section id="contact" className="min-h-screen">
                  <Contact />
                </section>
                {/* Footer is part of the main page flow */}
                <Footer />
              </div>
            } />
            {/* Route for the dedicated Experience page */}
            <Route path="/experience" element={
              // The Experience component itself has padding and title, so wrapping div might be redundant unless specific layout needed
              <Experience /> // Experience component likely handles its own title and padding.
            } />
             {/* Optional: Keep a route for the standalone Resume page if needed */}
             {/* <Route path="/resume" element={<Resume />} /> */}
            {/* Route for the dedicated page showing all projects */}
            <Route path="/projects" element={<ProjectList />} />
            {/* Route for a specific project detail page */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
        {/* ChatBot component, its visibility is controlled by its own state */}
        <ChatBot isOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      </AnimationWrapper>
    </Router>
  );
}

export default App;
