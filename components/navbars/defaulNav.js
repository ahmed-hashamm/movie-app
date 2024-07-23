"use client";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HomeNavLinks } from "@/utils/data";
import MobileNavCloseButton from "../buttons/mobileNavCloseButton";
import LoginButton from "../buttons/login";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaSquareMinus } from "react-icons/fa6";
import DefaultSearch from "./search";

export const DefaultNav = ({
  bgColor,
  visibility,
  desktopNavColor,
  longinButtonBg,
}) => {
  const [nav, setNav] = useState(false);
  const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const openGenreDropdown = () => {
    setGenreDropdownOpen(true);
    setCountryDropdownOpen(false);
  };

  const openCountryDropdown = () => {
    setCountryDropdownOpen(true);
    setGenreDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setTimeout(() => {
      setGenreDropdownOpen(false);
      setCountryDropdownOpen(false);
    }, 3000);
  };
  const toggleGenreDropdown = () => {
    setGenreDropdownOpen(!genreDropdownOpen);
    setCountryDropdownOpen(false);
  };

  const toggleCountryDropdown = () => {
    setCountryDropdownOpen(!countryDropdownOpen);
    setGenreDropdownOpen(false);
  };

  return (
    <nav
      className={`${bgColor} ${desktopNavColor} px-6 py-4  h-16 w-full flex justify-between items-center font-medium leading-10 tracking-wider text-white`}
    >
      <Link href={"/"} className="logo order-2">
        <Image src={logo} width={120} alt="Logo" />
      </Link>
      <ul className="hidden lg:flex lg:items-center lg:order-2 lg:mr-14 text-[14px]">
        {HomeNavLinks.map(({ id, link, title, dropdown }) => (
          <li
            key={id}
            className="nav-links mx-3 cursor-pointer relative"
            onMouseEnter={
              title === "Genre"
                ? openGenreDropdown
                : title === "Country"
                ? openCountryDropdown
                : null
            }
            onMouseLeave={closeDropdowns}
          >
            <Link className="text-white hover:underline" href={link}>
              {title}
            </Link>
            {dropdown && (
              <ul
                className={`absolute top-full left-0 mt-2 bg-[#1F1F1F] rounded-md  text-white z-10 grid grid-cols-2 md:grid-cols-4 px-3 `}
                onMouseEnter={
                  title === "Genre"
                    ? openGenreDropdown
                    : title === "Country"
                    ? openCountryDropdown
                    : null
                }
                onMouseLeave={closeDropdowns}
                style={{
                  display:
                    (title === "Genre" && genreDropdownOpen) ||
                    (title === "Country" && countryDropdownOpen)
                      ? "flex"
                      : "none",
                }}
              >
                {dropdown.map((group) => (
                  <div key={group.id} className="py-4 w-max">
                    {group.genres ? (
                      <ul className="">
                        {group.genres.map((genre) => (
                          <li
                            key={genre.id}
                            className="pr-7 pl-3 text-[15px] leading-7 hover:bg-[#FFE400] hover:text-black"
                          >
                            <Link href={genre.link}>{genre.name}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="">
                        {group.countries.map((country) => (
                          <li
                            key={country.id}
                            className="pr-7 pl-3 text-[15px] leading-7 hover:bg-[#FFE400] hover:text-black"
                          >
                            <Link href={country.link}>{country.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setNav(!nav)}
        className={`lg:hidden text-white rounded-sm ${
          nav ? "bg-[#5E5E5E]" : "bg-[#121212]"
        }`}
      >
        <GiHamburgerMenu size={20} />
      </button>
      {nav && (
        <div className="absolute top-0 w-80 z-2 left-0 h-screen  ">
          <ul
            className={`bg-[#151515] absolute top-18 text-xl  flex flex-col  w-full p-8 items-start gap-6 text-white h-screen`}
          >
            <MobileNavCloseButton setNav={setNav} />
            {HomeNavLinks.map(({ id, link, title, dropdown }) => (
              <div
                key={id}
                className="flex flex-col w-full  items-center justify-between"
              >
                <div className="flex items-center gap-2 w-full justify-between">
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {title}
                  </Link>
                  {title === "Genre" && (
                    <button
                      className="text-white flex"
                      onClick={title === "Genre" && toggleGenreDropdown}
                    >
                      {title === "Genre" && genreDropdownOpen ? (
                        <FaSquareMinus />
                      ) : (
                        <AiFillPlusSquare />
                      )}
                    </button>
                  )}
                  {title === "Country" && (
                    <button
                      className="text-white flex"
                      onClick={title === "Country" && toggleCountryDropdown}
                    >
                      {title === "Country" && countryDropdownOpen ? (
                        <FaSquareMinus />
                      ) : (
                        <AiFillPlusSquare />
                      )}
                    </button>
                  )}
                </div>

                {dropdown && (
                  <ul
                    className={`bg-[#131313]  py-2 text-white z-10 grid grid-cols-2 gap-4`}
                    style={{
                      display:
                        (title === "Genre" && genreDropdownOpen) ||
                        (title === "Country" && countryDropdownOpen)
                          ? "grid"
                          : "none",
                    }}
                  >
                    {dropdown.map((group) => (
                      <div key={group.id} className="text-base text-gray-400">
                        {group.genres ? (
                          <ul>
                            {group.genres.map((genre) => (
                              <li key={genre.id} className="py-2 w-max ">
                                <Link href={genre.link}>{genre.name}</Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul>
                            {group.countries.map((country) => (
                              <li key={country.id} className="py-2">
                                <Link href={country.link}>{country.name}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
      <div className="text-white order-3   flex gap-6 justify-center items-center">
        <DefaultSearch isVisivible={visibility} />

        <LoginButton bgColor={longinButtonBg} />
      </div>
    </nav>
  );
};
