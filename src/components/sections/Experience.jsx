import React, { useState } from 'react';

function Experience() {
  const [activeView, setActiveView] = useState('Professional'); // Default view is Professional

  const experiences = [
    {
      title: "Member",
      company: "IEEE Computer Society & IEEE",
      duration: "Feb 2025 – Present",
      description: "Full-time, 3 mos",
    },
    {
      title: "Data Science Intern",
      company: "CODSoft",
      duration: "Dec 2024 – Jan 2025",
      description: "Internship, 2 mos, Exploratory Data Analysis, Python (Programming Language), and +3 skills",
    },
    {
      title: "Data Science Intern",
      company: "TEACHNOOK (TEACHSCAPE ONLINE LEARNING SERVICES PRIVATE LIMITED)",
      duration: "Aug 2024 – Sep 2024",
      description: "Internship, 2 mos, Exploratory Data Analysis, Microsoft Power BI, and +5 skills",
    },
  ];

  const education = [
    {
      institution: "Sri Krishna College of Technology",
      degree: "Bachelor of Engineering – BE, Computer Science",
      duration: "2023 – 2027",
      description: "Grade: 7.91 CGPA (Upto 3rd Semester), Project Management, Docker, and +4 skills",
    },
    {
      institution: "Rose Mary Matriculation Higher Secondary School",
      duration: "Jun 2008 – Apr 2023",
      description: "Grade: 93.33%",
    },
    {
      institution: "Student Coordinator",
      company: "Institution’s Innovation Council, Sri Krishna College of Technology",
      duration: "Dec 2024 – Present",
      description: "Full-time, 5 mos, Coimbatore, Tamil Nadu, India",
    },
  ];

  return (
    <div className="p-12 text-white animate-fade-in">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8 space-x-28"> {/* Increased space-x-4 to space-x-8 */}
        <button
          className={`px-6 py-3 rounded-lg ${activeView === 'Professional' ? 'bg-ai-blue text-ai-dark' : 'bg-ai-dark/50 text-gray-300'} transition-all duration-300`}
          onClick={() => setActiveView('Professional')}
        >
          Professional
        </button>
        <button
          className={`px-6 py-3 rounded-lg ${activeView === 'Academics' ? 'bg-ai-blue text-ai-dark' : 'bg-ai-dark/50 text-gray-300'} transition-all duration-300`}
          onClick={() => setActiveView('Academics')}
        >
          Academics
        </button>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-ai-blue"></div>
        {activeView === 'Professional' ? (
          experiences.map((exp, index) => (
            <div key={index} className={`flex items-center my-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="w-5/12 p-6 bg-ai-dark/30 rounded-lg border-2 border-ai-blue/40 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-ai-accent">{exp.title}</h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-ai-blue">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-ai-blue rounded-full"></div>
            </div>
          ))
        ) : (
          education.map((edu, index) => (
            <div key={index} className={`flex items-center my-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="w-5/12 p-6 bg-ai-dark/30 rounded-lg border-2 border-ai-blue/40 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-ai-accent">{edu.institution}</h3>
                {edu.degree && <p className="text-gray-300">{edu.degree}</p>}
                <p className="text-ai-blue">{edu.duration}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-ai-blue rounded-full"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Experience;