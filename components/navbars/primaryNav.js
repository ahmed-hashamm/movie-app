"use client";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "@/utils/data";
export const PrimaryNav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="px-6 py-4 bg-[#000]  h-16 w-full flex justify-between items-center  font-medium leading-10 tracking-widest">
      <div className="logo">
        <Image src={logo} width={120}></Image>
      </div>
      <ul className="hidden md:flex md:items-center mr-4 ">
        {navLinks.map(({ id, link, title }) => (
          <li
            key={id}
            className="nav-links ml-12   cursor-pointer   flex items-center justify-center    text-white hover:underline "
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setNav(!nav)}
        className={`md:hidden  text-white rounded-sm flex justify-center items-center gap-x-2  px-3 ${nav? 'bg-[#5E5E5E]' : 'bg-[#121212]'} `}
      >
        <GiHamburgerMenu className="pb-[1px]" />
        <span>Menu</span>
      </button>
      {nav && (
        <div className="absolute top-[60px] w-2/3 z-[2]  right-0 flex justify-center ">
          <ul className="absolute top-18 rounded-lg flex flex-col bg-black  w-full py-4 items-center text-white     ">
            {navLinks.map(({ id, link, title }) => (
              <li key={id}>
                <Link onClick={() => setNav(!nav)} href={link}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
