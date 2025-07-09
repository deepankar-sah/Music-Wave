"use client";
import { motion } from "motion/react";
import Header from "@/components/header";

const Homepage = () => {
  return (
    <motion.div
      className="max-h-full w-full  mt-10  rounded-3xl space-y-3 text-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Header />
    </motion.div>
  );
};
export default Homepage;
