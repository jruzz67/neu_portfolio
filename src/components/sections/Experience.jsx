import React from 'react';

function Experience() {
  const experiences = [
    { title: "Lead MLE & Data Scientist", company: "BrainSightAI", duration: "Jul 2023 – Present", description: "Led AI research for neurological data analysis." },
    { title: "Senior MLE & Data Scientist", company: "BrainSightAI", duration: "May 2022 – Jul 2023", description: "Developed advanced ML models for healthcare." },
    { title: "Artificial Intelligence Engineer", company: "DCKAP", duration: "Sep 2020 – Jan 2021", description: "Focused on AI solutions for e-commerce." },
    { title: "Machine Learning Engineer", company: "BrainSightAI", duration: "Aug 2021 – May 2022", description: "Built scalable ML pipelines." },
  ];

  return (
    <div className="p-12 text-white animate-fade-in">
      <h1 className="text-5xl font-bold text-ai-blue mb-8">Experience</h1>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-ai-blue"></div>
        {experiences.map((exp, index) => (
          <div key={index} className={`flex items-center my-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className="w-5/12 p-6 bg-ai-dark/30 rounded-lg border-2 border-ai-blue/20 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-ai-accent">{exp.title}</h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-ai-blue">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-ai-blue rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;