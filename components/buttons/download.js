import React from "react";
import { FaDownload } from "react-icons/fa";
const Download = ({ text, textColor, bgColor }) => {
  return (
    <button className={`${textColor} ${bgColor} flex gap-4 px-5 py-2 font-semibold items-center transition duration-300`}> <FaDownload /> <span>{text}</span></button>
  );
};

export default Download;
