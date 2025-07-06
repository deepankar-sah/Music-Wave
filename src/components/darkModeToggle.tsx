"use client";

import { useDarkMode } from "@/context/darkModeContext";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion"; 

const DarkModeToggle: React.FC = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? <Sun className="text-yellow-400"/> : <Moon className="text-gray-200" />}
    </motion.button>
  );
};

export default DarkModeToggle;
