"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false); 

  //  Sync with localStorage on client
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    const isDark = stored ===  "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
