import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="relative w-11/12">
    <input className="w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900" type="search" placeholder="Enter keywords..."/>
    <button className="absolute inset-y-0 right-0 flex items-center px-8 text-gray-900 bg-[#FFE400]   rounded-r-md  focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900">
    <FaSearch size={20}/>
  </button>
</div>
  )
}

export default SearchBar