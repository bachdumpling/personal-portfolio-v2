import React, { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Initialize theme state without a value
  const [theme, setTheme] = useState(null);

  // useEffect will run on the client after rendering
  useEffect(() => {
    // Get stored theme value from localStorage
    const storedTheme = localStorage.getItem("theme");

    // If a theme is stored, use it; otherwise default to 'light'
    const userTheme = storedTheme || "light";
    setTheme(userTheme);

    // Update the document's class to reflect the current theme
    const root = window.document.documentElement;
    root.classList.remove(storedTheme ? "light" : "dark");
    root.classList.add(userTheme);

    // Store selected theme in localStorage
    localStorage.setItem("theme", userTheme);
  }, []);

  // Wrap setTheme to provide setting function that updates localStorage
  const userSetTheme = (themeValue) => {
    setTheme(themeValue);
    localStorage.setItem("theme", themeValue);
    const root = window.document.documentElement;
    root.classList.remove(themeValue === "dark" ? "light" : "dark");
    root.classList.add(themeValue);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: userSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
