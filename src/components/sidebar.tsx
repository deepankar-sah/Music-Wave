"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, ListMusic, LogOut } from "lucide-react";

// Navigations Links
const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Playlist", path: "/playlist", icon: ListMusic },
  { name: "Liked Songs", path: "/liked-songs", icon: Home },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  // Handle Logout Function

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  return (
    <>
      <motion.aside
        className="
        w-68 h-full px-3 py-10 m-6 mt-10  rounded-3xl space-y-16 bg-[#181b21] text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/*  Logo */}

        <div className=" flex items-center justify-center text-white">
          <span className=" text-xl  text-orange-400 font-bold ">
            🎵 Music Wave
          </span>
        </div>

        {/*  Navigations  Links */}
        <nav className="h-full space-y-4">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <Link
              key={name}
              href={path}
              className={`h-[40px] p-2 flex flex-row items-center  gap-3 cursor-pointer   rounded-xl ${
                isActive(path) ? "bg-gray-700 " : "hover:bg-gray-700  "
              }`}
            >
              <Icon
                className={`${
                  isActive(path)
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                size={20}
              />
              <span
                className={`${
                  isActive(path)
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </nav>

        {/*  Logout Button */}

        <motion.button
          className=" w-full gap-3 h-[40px]  flex p-3  items-center  cursor-pointer  rounded-xl hover:bg-gray-600"
          onClick={handleLogout}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <LogOut className="text-gray-400 hover:text-gray-200" size={20} />
          <span className="text-[16px] text-gray-400 hover:text-gray-200">
            Logout
          </span>
        </motion.button>
      </motion.aside>
    </>
  );
};

export default Sidebar;
