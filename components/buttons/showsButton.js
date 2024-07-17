import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
const ShowsButton = () => {
  return (
    <button className="bg-[#ffffff]  px-3 text-sm rounded-sm text-black font-light flex items-center gap-3">
     <TfiMenuAlt className="hidden md:block"/>
      <span >TV Shows</span>
    </button>
  );
};

export default ShowsButton;
