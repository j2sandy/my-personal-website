
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference on component mount
  useEffect(() => {
    // Since localStorage is not available in artifacts, we'll use memory only
    // In a real app, uncomment the localStorage lines below
    // const savedTheme = localStorage.getItem('theme');
    // if (savedTheme === 'dark') {
    //   setDarkMode(true);
    // }
  }, []);

  // Update theme and save preference
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // In a real app, uncomment the localStorage line below
    // localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return {
    darkMode,
    toggleDarkMode
  };
};
