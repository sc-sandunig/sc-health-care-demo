import React, { useEffect, useState } from 'react';

export const Default = (): JSX.Element => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const savedTheme = sessionStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Default fallback if no window
    return false;
  });

  // Sync body class and sessionStorage whenever theme changes
  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    sessionStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="relative inline-block">
      <button
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        onClick={() => setIsDark((prev) => !prev)}
        className={`
          w-12 h-6 p-0.5 rounded-full flex items-center
          transition-colors duration-300 border
         bg-foreground dark:bg-foreground-dark
        `}
      >
        <span
          className={`
            absolute w-5 h-5 rounded-full transition-all duration-400
           bg-background dark:bg-background-dark dark:translate-x-6
          `}
        />
      </button>
    </div>
  );
};
