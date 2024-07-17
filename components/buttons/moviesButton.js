import React from "react";
import { FaPlayCircle } from "react-icons/fa";
const MoviesButton = () => {
  return (
    <button className="bg-[#FFE400]  px-3 text-sm rounded-sm text-black font-light flex items-center gap-3">
      <FaPlayCircle  className="hidden md:block"/>
      <span >Movies</span>
    </button>
  );
};

export default MoviesButton;
