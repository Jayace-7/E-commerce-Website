import { useState, useEffect } from 'react';
import darkModeIcon from '../assets/darkmode.png';
import lightModeIcon from '../assets/lightmode.png';

// (No-op comment kept intentionally)



export default function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-white text-orange-400 dark:text-yellow-400 transition-all duration-300 hover:bg-orange-400 dark:hover:bg-gray-600 hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <img
          src={darkModeIcon}
          alt="Dark mode icon"
          className="w-8 h-8"
          draggable={false}
        />
      ) : (
        <img
          src={lightModeIcon}
          alt="Light mode icon"
          className="w-8 h-8"
          draggable={false}
        />
      )}
    </button>
  );
}