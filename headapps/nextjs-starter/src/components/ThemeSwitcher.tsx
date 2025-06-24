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
    <label className="theme-switcher">
      <label htmlFor="theme-toggle" className="d-none"></label>
      <input
        id="theme-toggle"
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark((prev) => !prev)}
      />
      <span className="theme-switcher-slider"></span>
    </label>
  );
};
