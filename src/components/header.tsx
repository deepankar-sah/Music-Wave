"use client";

import { Search, Settings } from "lucide-react";

const header = () => {
  return (
    <div className="flex items-center justify-around space-x-4">
      {/* 🔍 Search Bar */}
      <div className="flex items-center justify-around bg-[#181b21] px-4 py-2 rounded-full w-[500px] max-w-xl">
        <input
          type="text"
          placeholder="Search for a song"
          className="bg-transparent outline-none text-white w-full placeholder-gray-400"
        />
        <Search className="text-gray-400 mr-2" />
      </div>

      {/*  Profile information */}

      <div className="flex items-center justify-center gap-3">
        <div className="relative w-10 h-10">
          <img
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
            alt="Profile"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Molly Hunter</p>
          <p className="text-green-400 text-xs ">Premium</p>
        </div>
        <div className=" w-8 h-8  flex items-center justify-center  rounded-full bg-[#181b21]">
          <Settings size={20} className="text-white " />
        </div>
      </div>
    </div>
  );
};
export default header;
