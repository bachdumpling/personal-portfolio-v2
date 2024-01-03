import React, { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Initialize theme state without a value
  const [theme, setTheme] = useState(null);

  // Function to update the root class based on the theme
  const updateRootClass = (themeValue) => {
    const root = window.document.documentElement;
    root.classList.remove(themeValue === "dark" ? "light" : "dark");
    root.classList.add(themeValue);
  };

  useEffect(() => {
    // Get stored theme value from localStorage
    const storedTheme = localStorage.getItem("theme");

    // Determine the user's system preference
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    // Use stored theme, or system preference if there's no stored theme
    const initialTheme = storedTheme || systemPreference;
    setTheme(initialTheme);
    updateRootClass(initialTheme);

    // Store selected theme in localStorage
    localStorage.setItem("theme", initialTheme);

    // Event listener for system theme change
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      updateRootClass(newTheme);
      localStorage.setItem("theme", newTheme);
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    // Clean up event listener
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Wrap setTheme to provide setting function that updates localStorage and root class
  const userSetTheme = (themeValue) => {
    setTheme(themeValue);
    localStorage.setItem("theme", themeValue);
    updateRootClass(themeValue);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: userSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
