import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: "AI-Powered Emotional Companion Chatbot", description: "An LLM-based chatbot recognizing 27 emotions with real-time sentiment analysis", tech: ["Python", "LangChain", "Ollama (Mistral:7B)", "NLP", "FastAPI"] },
  { id: 2, title: "Personalized Educational Platform with AI Twin Mentor", description: "An AI-driven platform for personalized study plans featuring an AI Twin Mentor", tech: ["Ollama (LLaMA 3)", "OpenAI API"] },
  { id: 3, title: "DeepSeek R1:1.5b Model Deployment", description: "Deployment of the DeepSeek R1.5B model using containerization for scalable AI solutions", tech: ["Docker", "Ollama"] },
];

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-12 text-white min-h-screen animate-fade-in">
      <h2 className="text-5xl font-bold text-ai-blue mb-8">Projects</h2>
      <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute w-full h-full p-6 bg-ai-dark/50 rounded-lg border-2 border-ai-blue/20 shadow-md transition-all duration-500 ${
              index === currentProject ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h3 className="text-3xl font-bold text-ai-accent">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="flex gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-ai-blue/30 rounded-full text-sm">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link to="/projects" className="mt-8 inline-block px-6 py-3 bg-ai-blue text-ai-dark hover:bg-ai-blue/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        View All Projects
      </Link>
    </div>
  );
}

export default Projects;