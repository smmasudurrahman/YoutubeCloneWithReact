import { useState, useEffect } from "react";

// Custom hook for Dark Mode
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem("darkMode") || "false")
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return [darkMode, toggleDarkMode];
};
