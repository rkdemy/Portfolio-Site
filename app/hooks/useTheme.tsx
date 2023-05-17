"use client";
import React, { useEffect } from "react";

// const useTheme = (darkMode) => {
//   useEffect(() => {
//     // Apply the theme based on the darkMode value
//     const theme = darkMode ? "light" : "dark";

//     // Apply the theme to the document or specific elements
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [darkMode]);
// };

const useTheme = (initialDarkMode) => {
  const storageKey = "darkMode";

  // Retrieve the saved dark mode preference from local storage
  const savedDarkMode = localStorage.getItem(storageKey);

  // Set the initial dark mode value to either the saved preference or the initial value
  const [darkMode, setDarkMode] = React.useState(
    savedDarkMode !== null ? JSON.parse(savedDarkMode) : initialDarkMode
  );

  useEffect(() => {
    // Apply the theme based on the darkMode value
    const theme = darkMode ? "light" : "dark";

    // Apply the theme to the document or specific elements
    document.documentElement.setAttribute("data-theme", theme);

    // Save the dark mode preference to local storage
    localStorage.setItem(storageKey, JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useTheme;
