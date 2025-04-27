import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: "Neural Net Visualizer", description: "Interactive neural network tool", tech: ["React", "D3.js"], domain: "AI" },
  { id: 2, title: "GenAI Chatbot", description: "AI-powered assistant", tech: ["Python", "PyTorch"], domain: "AI" },
  { id: 3, title: "Data Analyzer", description: "Real-time data dashboard", tech: ["React", "Node.js"], domain: "Data Science" },
];

function ProjectList() {
  return (
    <div className="p-12 text-white min-h-screen animate-fade-in">
      <h2 className="text-5xl font-bold text-ai-blue mb-8">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="p-6 bg-ai-dark/50 rounded-lg border-2 border-ai-blue/20 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-ai-accent">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="flex gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-ai-blue/30 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            <p className="text-ai-blue mt-2">Domain: {project.domain}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <select className="p-3 bg-ai-dark/50 text-white rounded-lg border-2 border-ai-blue/20 focus:border-ai-blue focus:ring-2 focus:ring-ai-blue/50 transition-all duration-300">
          <option value="">All Domains</option>
          <option value="AI">AI</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>
    </div>
  );
}

export default ProjectList; 