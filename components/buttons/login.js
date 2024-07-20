import React from 'react'
import { FaRegUser } from "react-icons/fa";
const LoginButton = ({bgColor}) => {
  return (
    <button className={` ${bgColor} flex items-center gap-3 rounded-sm  p-3 text-white font-medium text-xs`}><FaRegUser size={18}/><span className='hidden md:block'>Login</span></button>
  )
}

export default LoginButton