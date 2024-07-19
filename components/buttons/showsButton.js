import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
const ShowsButton = ({ isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive === "shows" ? "bg-[#FFE400] text-black" : "bg-white text-black"
      } p-2 px-3 text-sm rounded-sm text-black font-light flex items-center gap-3`}
    >
      <TfiMenuAlt className="hidden md:block" />
      <span>TV Shows</span>
    </button>
  );
};

export default ShowsButton;
