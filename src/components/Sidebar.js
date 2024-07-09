import React from "react";
import { assets } from "../Assets/assets";

export default function Sidebar() {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#7f5538] h-[15%] rounded-3xl flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-3 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="home_icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-3 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="home_icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#7f5539] h-[85%] rounded-3xl">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack_icon" />
            <p className="font-semibold">Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="arrow_icon" />
            <img className="w-5" src={assets.plus_icon} alt="plus_icon" />
          </div>
        </div>
        <div className="p-4 bg-[#b08968]  m-2 rounded-2xl font-semibold flex flex-col items-start justify-start gap-1 pl-4 shadow-lg">
          <h1 className="text-[#3D405B] drop-shadow-lg">
            Create Your PlayList
          </h1>
          <button className="px-4 py-1.5 bg-[#ddb892] text-[12px] text-[#3D405B] rounded-full mt-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
