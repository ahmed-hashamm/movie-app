import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const DefaultSearch = ({ isVisivible, onSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      className={`${isVisivible} hidden lg:flex w-48 ${
        isFocused ? "bg-[#474747]" : "bg-[#333333]"
      } rounded-full transition duration-300 ease-in justify-center items-center text-sm  tracking-normal`}
    >
      <FaSearch className="ml-3" size={20} />
      <input
        onSubmit={onSubmit}
        className="w-full placeholder:tracking-tight placeholder:font-thin placeholder:text-[#6C757B] text-white bg-transparent py-2 px-3 rounded-full focus:outline-none"
        type="search"
        placeholder="Enter keywords..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default DefaultSearch;
