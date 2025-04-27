import React from 'react';

function Skills() {
  const skills = [
    { name: "Python" },
    { name: "Java" },
    { name: "SQL" },
    { name: "Docker" },
    { name: "Ollama" },
  ];

  const tools = [
    { name: "Scikit-learn" },
    { name: "Matplotlib" },
    { name: "TensorFlow" },
    { name: "FastAPI" },
    { name: "LangChain" },
  ];

  return (
    <div className="p-12 text-white min-h-screen animate-fade-in">
      <h2 className="text-5xl font-bold text-ai-blue mb-8">Skills</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl text-ai-blue mb-6">Professional Skillset</h3>
          <div className="grid grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 bg-ai-dark/50 rounded-lg border-2 border-ai-blue/20 hover:border-ai-blue hover:bg-ai-blue/10 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-xl">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl text-ai-blue mb-6">Tools I Use</h3>
          <div className="grid grid-cols-5 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-6 bg-ai-dark/50 rounded-lg border-2 border-ai-blue/20 hover:border-ai-blue hover:bg-ai-blue/10 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-xl">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;  