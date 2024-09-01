// app/context/ThemeContext.jsx

"use client";
import { createContext, useState, useContext } from 'react';

// Create Context
const ThemeContext = createContext();

// Create Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);