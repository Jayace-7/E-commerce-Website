import { useEffect, useState } from 'react';
import darkModeIcon from '../assets/darkmode.png';
import lightModeIcon from '../assets/lightmode.png';

export default function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-400 bg-gray-200 text-orange-400 transition-all duration-300 hover:scale-110 hover:bg-orange-400 hover:shadow-lg dark:border-orange-400 dark:bg-white dark:text-yellow-400 dark:hover:bg-gray-600"
      aria-label="Toggle dark mode"
    >
      <img
        src={isDark ? darkModeIcon : lightModeIcon}
        alt={isDark ? 'Dark mode icon' : 'Light mode icon'}
        className="h-8 w-8"
        draggable={false}
      />
    </button>
  );
}