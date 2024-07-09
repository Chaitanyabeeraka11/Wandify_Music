import React from "react";

export default function SongItem({ name, image, id }) {
  // Destructure the props
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#986F51]">
      <img className="rounded-2xl" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
    </div>
  );
}
