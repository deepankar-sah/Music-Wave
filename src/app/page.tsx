"use client";
import { motion } from "motion/react";
import Header from "@/components/header";
import { usePlayerStore } from "@/store/usePlayerStore";
import Image from "next/image";

const Homepage = () => {
  const { videoList, setCurrentVideo } = usePlayerStore();
  return (
    <motion.div
      className="max-h-full w-full  mt-10  rounded-3xl space-y-3 text-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Header />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {Array.isArray(videoList) && videoList.length > 0 ? (
          videoList.map((video) => (
            <div
              key={video.id.videoId}
              onClick={() => setCurrentVideo(video)}
              className="cursor-pointer bg-[#181b21] p-3 rounded-xl hover:bg-gray-700 transition"
            >
              <Image
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white mt-2 text-sm font-semibold line-clamp-2">
                {video.snippet.title}
              </p>
              <p className="text-gray-400 text-xs">
                {video.snippet.channelTitle}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400"> no videos found.</p>
        )}
      </div>
    </motion.div>
  );
};
export default Homepage;
