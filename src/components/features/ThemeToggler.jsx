// import React, { useState, useEffect } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// function ThemeToggler({ setIsDarkMode }) {
//   const [isDark, setIsDark] = useState(() => {
//     return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
//   });

//   useEffect(() => {
//     setIsDarkMode(isDark);
//     document.documentElement.classList.toggle('dark', isDark);
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//   }, [isDark, setIsDarkMode]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="fixed top-6 right-6 text-ai-blue hover:text-ai-accent text-2xl transition-colors z-50"
//     >
//       {isDark ? <FaSun /> : <FaMoon />}
//     </button>
//   );
// }

// export default ThemeToggler;