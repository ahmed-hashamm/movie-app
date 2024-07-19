import React from "react";
import { FaPlayCircle } from "react-icons/fa";
const MoviesButton = ({ isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive === "movies" ? "bg-[#FFE400] text-black" : "bg-white text-black"
      }  p-2 px-3 text-sm rounded-sm text-black font-light flex items-center gap-3`}
    >
      <FaPlayCircle className="hidden md:block" />
      <span>Movies</span>
    </button>
  );
};

export default MoviesButton;
