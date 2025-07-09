"use client";

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
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "@/store/usePlayerStore";
import YouTube, { YouTubePlayer } from "react-youtube";

const MusicPlayer = () => {
  const {
    currentVideo,
    videoList,
    setCurrentVideo,
    repeatMode,
    shuffle,
    toggleRepeatMode,
    toggleShuffle,
  } = usePlayerStore();

  const playerRef = useRef<YouTubePlayer | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  // When Player is Ready
  const handleReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(volume);
    playerRef.current.playVideo();
  };

  // Handle End, Shuffle, Repeat Modes
  const handleStateChange = (event: any) => {
    if (event.data === 0) {
      // Video ended
      const currentIndex = videoList.findIndex(
        (v) => v.id.videoId === currentVideo?.id.videoId
      );

      if (repeatMode === "repeatOne") {
        playerRef.current?.seekTo(0);
        playerRef.current?.playVideo();
        return;
      }

      if (shuffle) {
        const randomIndex = Math.floor(Math.random() * videoList.length);
        setCurrentVideo(videoList[randomIndex]);
        return;
      }

      const nextVideo = videoList[currentIndex + 1];

      if (nextVideo) {
        setCurrentVideo(nextVideo);
      } else if (repeatMode === "repeatAll") {
        setCurrentVideo(videoList[0]); // start again
      } else {
        setIsPlaying(false); // noRepeat
      }
    }
  };

  //  Track Progress
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        playerRef.current &&
        typeof playerRef.current.getCurrentTime === "function"
      ) {
        const current = playerRef.current.getCurrentTime() || 0;
        const total = playerRef.current.getDuration() || 0;
        setCurrentTime(current);
        setDuration(total);
        setProgress((current / total) * 100);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [currentVideo]);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value);
    const newTime = (newProgress / 100) * duration;
    playerRef.current?.seekTo(newTime, true);
    setProgress(newProgress);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (playerRef.current) {
      playerRef.current.setVolume(vol);
    }
  };

  const formatTime = (sec: number) => {
    if (isNaN(sec)) return "00:00";
    const mins = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  if (!currentVideo) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 bg-[#181b21] text-white px-4 py-3 shadow-md z-50"
    >
      <YouTube
        videoId={currentVideo.id.videoId}
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
          },
        }}
        onReady={handleReady}
        onStateChange={handleStateChange}
      />

      <div className="flex flex-col md:flex-row justify-between items-center mx-4">
        {/* Video Info */}
        <div className="flex items-center gap-4">
          <Image
            src={currentVideo.snippet.thumbnails.default.url}
            alt="cover"
            width={50}
            height={50}
            className="rounded-md"
          />
          <div className="text-sm">
            <p className="font-semibold line-clamp-1">
              {currentVideo.snippet.title}
            </p>
            <p className="text-gray-400 text-xs">
              {currentVideo.snippet.channelTitle}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <SkipBack
            size={20}
            className="cursor-pointer hover:text-gray-300"
            onClick={() => {
              const currentIndex = videoList.findIndex(
                (v) => v.id.videoId === currentVideo.id.videoId
              );
              if (currentIndex > 0)
                setCurrentVideo(videoList[currentIndex - 1]);
            }}
          />

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black rounded-full p-2"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>

          <SkipForward
            size={20}
            className="cursor-pointer hover:text-gray-300"
            onClick={() => {
              const currentIndex = videoList.findIndex(
                (v) => v.id.videoId === currentVideo.id.videoId
              );
              if (currentIndex < videoList.length - 1)
                setCurrentVideo(videoList[currentIndex + 1]);
            }}
          />
        </div>

        {/* Actions */}
        <div className="space-x-8 flex flex-row">
          <div className="flex space-x-4">
            <Heart className="text-white hover:text-red-500" size={18} />
            <span title={`Repeat Mode: ${repeatMode}`}>
              <Repeat
                className={`cursor-pointer ${
                  repeatMode !== "noRepeat" ? "text-orange-500" : "text-white"
                }`}
                size={18}
                onClick={toggleRepeatMode}
              />
            </span>
            <Shuffle
              className={`cursor-pointer ${
                shuffle ? "text-orange-500" : "text-white"
              }`}
              size={18}
              onClick={toggleShuffle}
            />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Volume2 size={18} />
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              className="w-[100px] accent-orange-400"
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full mt-3">
        <div className="flex justify-between text-xs text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={isNaN(progress) ? 0 : progress}
          onChange={handleSeek}
          className="w-full accent-orange-400"
        />
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
