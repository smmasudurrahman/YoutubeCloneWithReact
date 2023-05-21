import { createContext, useContext } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const DarkModeContext = createContext();

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}

export const DarkModeProvider = ({ children }) => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
