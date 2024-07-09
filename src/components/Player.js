import React from "react";
import { assets, songsData } from "../Assets/assets";

export default function Player() {
  return (
    <div className="h-[10%] bg-[#7f5539] flex justify-between items-center text-[#3d405b] rounded-3xl ml-2 mr-2 mb-2">
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-14 ml-4 rounded-xl shadow-lg"
          src={songsData[0].image}
          alt="song_image"
        />
        <div>
          <p className="text-white font-bold">{songsData[0].name}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="shuffle_icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="shuffle_icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.play_icon}
            alt="shuffle_icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="shuffle_icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="shuffle_icon"
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="text-white">0:00</p>
          <div className="w-[60vw] max-w-[500px] bg-[#3D405B] rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-white rounded-full" />
          </div>
          <p className="text-white">3:00</p>
        </div>
      </div>
    </div>
  );
}
