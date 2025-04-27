import React from 'react';

function Resume() {
  return (
    <div className="p-12 text-white min-h-screen animate-fade-in">
      <h2 className="text-5xl font-bold text-ai-blue mb-8">Resume</h2>
      <a
        href="https://your-aws-s3-bucket.s3.amazonaws.com/your-resume.pdf" // Replace with your actual AWS S3 link
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-ai-blue text-ai-dark hover:bg-ai-blue/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;