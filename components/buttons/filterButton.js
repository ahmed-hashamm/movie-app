import React from "react";
import { FaFilter } from "react-icons/fa";
const FilterButton = ({onClick}) => {
  return <button
  onClick={onClick}
  className= ' bg-[#E2E6EA] h-7 px-2  text-sm rounded-sm text-black font-light flex items-center gap-x-2'>
  <FaFilter size={13}  />
  <span className="leading-none hidden md:block">Filter</span>
</button>;
};

export default FilterButton;
