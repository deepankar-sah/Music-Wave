"use client";

import { useState } from "react";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from "next/image";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30); // % progress

  return (
    <div className=" h-20 fixed bottom-0 w-full bg-[#181b21] border-t border-border z-50">
      <div className="w-full mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* 🎵 Song Info */}
        <div className="flex items-center gap-4 w-full md:w-1/3">
          <Image
            src="" // 🔁 Use dummy image for now
            alt="Song Thumbnail"
            width={48}
            height={48}
            className="rounded"
          />
          <div>
            <h4 className="text-sm font-semibold text-white">Song Title</h4>
            <p className="text-xs text-textSecondary text-white">Artist Name</p>
          </div>
        </div>

        {/* 🎮 Controls */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="flex items-center gap-6">
            <button>
              <SkipBack className="text-white" size={20} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-primary text-white hover:scale-105 transition"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button>
              <SkipForward className="text-white" size={20} />
            </button>
          </div>

          {/* 📶 Progress Bar */}
          <div className="flex items-center gap-2 mt-2 w-full">
            <span className="text-xs text-white">1:20</span>
            <div className="relative flex-1 h-1 bg-muted rounded overflow-hidden">
              <div
                className="absolute top-0 left-0 h-1 bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-white">3:45</span>
          </div>
        </div>

        {/* 🔊 Volume (Right side on desktop) */}
        <div className="hidden md:flex items-center gap-2 w-1/3 justify-end">
          <Volume2 size={20} />
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            className="w-24 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
