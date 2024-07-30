import React from "react";
import { FaRegUser } from "react-icons/fa";
const LoginButton = ({ bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` ${bgColor} flex items-center gap-2 rounded-sm  p-2 text-white font-medium text-xs`}
    >
      <FaRegUser size={15} />
      <span className="hidden md:block">Login</span>
    </button>
  );
};

export default LoginButton;
