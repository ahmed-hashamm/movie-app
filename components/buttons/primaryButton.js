import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";


const Button = ({ text,href }) => {
  return (
    <Link href={href} className="bg-[#FFE400] rounded-full px-7 py-4 mx-auto flex justify-center items-center gap-3 text-xl font-semibold w-fit text-gray-800 hover:shadow-[0_0_10px_#FFE400] hover:scale-110 transition duration-300 ease-in-out">
      <span>{text}</span> <FaArrowCircleRight  />
    </Link>
  );
};

export default Button;
