"use client";

import { motion } from "motion/react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  Repeat,
  Shuffle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 bg-[#181b21] text-white px-4 py-3  shadow-md z-50"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mx-4">
        {/*  Song Info */}
        <div className="flex items-center gap-4">
          <Image
            src="/dummy.jpg"
            alt="cover"
            width={50}
            height={50}
            className="rounded-md"
          />
          <div className="text-sm">
            <p className="font-semibold">Song Title</p>
            <p className="text-gray-400">Artist Name</p>
          </div>
        </div>
        {/*  Playback Controls */}
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <SkipBack size={20} className="cursor-pointer hover:text-gray-300" />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black rounded-full p-2"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>
          <SkipForward
            size={20}
            className="cursor-pointer hover:text-gray-300"
          />
        </div>

        {/*  Action Buttons */}

        <div className="space-x-8 flex flex-row">
          <div className="flex space-x-4">
            <Heart className="text-white hover:text-red-500 " size={18} />
            <Repeat className="text-white" size={18} />
            <Shuffle className="text-white" size={18} />
          </div>

          {/*  Volume */}
          <div className="hidden md:flex items-center gap-2">
            <Volume2 size={18} />
            <input
              type="range"
              min={0}
              max={100}
              className="w-[100px] accent-orange-400"
              defaultValue={70}
            />
          </div>
        </div>
      </div>

      {/*  Progress Bar */}
      <div className="w-full mt-3">
        <div className="h-[4px] w-full bg-gray-600 rounded-full">
          <div className="h-[4px] bg-orange-400 w-[40%] rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
