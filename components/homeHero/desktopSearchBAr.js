import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const DesktopSearchBAr = () => {
  return (
    <section className="flex justify-center items-center gap-4 mx-auto mt-8 w-full font-light">
      <div className="relative w-3/4 flex gap-4 bg-white justify-center  items-center p-6 rounded-full">
        <FaSearch className="pb-1" size={25} />
        <input
          className="w-full text-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
          type="search"
          placeholder="Enter keywords..."
        />
      </div>
      <button className=" flex items-center p-6 text-gray-900 bg-[#FFE400]   rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900">
        <FaArrowRight className="font-bold" size={25} />
      </button>
    </section>
  );
};

export default DesktopSearchBAr;
