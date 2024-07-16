import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const MobileNavCloseButton = ({ setNav }) => {
  return (
    <button
      className="bg-white rounded-full p-2  text-black flex items-center text-base font-medium"
      onClick={() => setNav(false)}
    >
      <MdOutlineKeyboardArrowLeft  size={25} /> Close menu
    </button>
  );
};

export default MobileNavCloseButton;
