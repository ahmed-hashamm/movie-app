import React from 'react'
import { FaSearch } from "react-icons/fa";
const MobSearchBar = () => {
  return (
    <div className="relative w-11/12  flex gap-3 bg-white justify-center items-center p-2 rounded-md">
    <FaSearch className="pb-1" size={20}/>
    <input className="w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900" type="search" placeholder="Enter keywords..."/>
</div>
  )
}

export default MobSearchBar