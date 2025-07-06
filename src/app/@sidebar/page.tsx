"use client";

import { useDarkMode } from "@/context/darkModeContext";
import DarkModeToggle from "@/components/darkModeToggle";
import { Home, Music, Settings } from "lucide-react";

const Sidebar = () => {
  const { darkMode } = useDarkMode();

  return (
    <aside
      className={`
        w-64 h-screen p-6 m-6 rounded-3xl
        ${ darkMode ? "bg-[#141420] text-white" : "bg-white text-black"}
      `}
    >
      <nav className="space-y-4">
        <DarkModeToggle/>
        <div className="flex items-center gap-3 cursor-pointer hover:text-primary">
          <Home size={20} />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-primary">
          <Music size={20} />
          <span>My Music</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-primary">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
