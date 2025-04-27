/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in src for Tailwind classes
    ],
    theme: {
      extend: {
        colors: {
          'ai-blue': '#00ddeb',
          'ai-dark': '#0a0f2b',
          'ai-accent': '#ff00ff',
          'cream': '#f5f5dc',
        },
      },
    },
    plugins: [],
  }