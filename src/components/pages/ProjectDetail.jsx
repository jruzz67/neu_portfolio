import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = {
  1: { title: "Neural Net Visualizer", description: "An interactive tool to visualize neural network training using React and D3.js.", details: "Features real-time updates and customizable layers." },
  2: { title: "GenAI Chatbot", description: "An AI assistant built with Python and PyTorch for natural language processing.", details: "Supports multiple intents and learns from user interactions." },
  3: { title: "Data Analyzer", description: "A dashboard for real-time data processing using React and Node.js.", details: "Includes charts and export functionality." },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="p-12 text-white min-h-screen animate-fade-in">
      <h2 className="text-5xl font-bold text-ai-blue mb-8">{project.title}</h2>
      <p className="text-gray-300">{project.description}</p>
      <p className="text-gray-300">{project.details}</p>
      <Link to="/projects" className="mt-6 inline-block px-6 py-3 bg-ai-blue text-ai-dark hover:bg-ai-blue/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        Back to All Projects
      </Link>
    </div>
  );
}

export default ProjectDetail;