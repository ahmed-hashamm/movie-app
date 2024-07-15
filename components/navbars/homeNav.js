// "use client";
// import { logo } from "@/public";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { HomeNavLinks } from "@/utils/data";
// export const HomeNav = () => {
//   const [nav, setNav] = useState(false);
//   return (
//     <nav className="px-6 py-4 bg-[#000]  h-16 w-full flex justify-between items-center  font-medium leading-10 tracking-wider">
//       <div className="logo order-2 ">
//         <Image src={logo} width={120}></Image>
//       </div>
//       <ul className="hidden md:flex md:items-center md:order-2  text-[14px]">
//         {HomeNavLinks.map(({ id, link, title, dropdown }) => (
//           <li
//             key={id}
//             className="nav-links mx-3 cursor-pointer   flex items-center justify-center    text-white hover:underline "
//           >
//             <Link href={link}>{title}</Link>
        
//           </li>
//         ))}
//       </ul>

//       <button
//         onClick={() => setNav(!nav)}
//         className={`md:hidden    text-white rounded-sm   ${
//           nav ? "bg-[#5E5E5E]" : "bg-[#121212]"
//         } `}
//       >
//         <GiHamburgerMenu className="pb-[1px]" />
//       </button>
//       {nav && (
//         <div className="absolute top-[60px] w-2/3 z-[2]  right-0 flex justify-center ">
//           <ul className="absolute top-18 rounded-lg flex flex-col bg-black  w-full py-4 items-center text-white     ">
//             {HomeNavLinks.map(({ id, link, title,dropdown }) => (
//               <li key={id}>
//                 <Link onClick={() => setNav(!nav)} href={link}>
//                   {title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="text-white order-3">login</div>
//     </nav>
//   );
// };
// "use client"
// import { logo } from "@/public";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { HomeNavLinks } from "@/utils/data";

// export const HomeNav = () => {
//   const [nav, setNav] = useState(false);
//   const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
//   const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

//   const toggleGenreDropdown = () => {
//     setGenreDropdownOpen(!genreDropdownOpen);
//     if (countryDropdownOpen) setCountryDropdownOpen(false);
//   };

//   const toggleCountryDropdown = () => {
//     setCountryDropdownOpen(!countryDropdownOpen);
//     if (genreDropdownOpen) setGenreDropdownOpen(false);
//   };

//   const handleMobileDropdownToggle = (title) => {
//     if (title === "Genre") {
//       setGenreDropdownOpen(!genreDropdownOpen);
//       if (countryDropdownOpen) setCountryDropdownOpen(false);
//     } else if (title === "Country") {
//       setCountryDropdownOpen(!countryDropdownOpen);
//       if (genreDropdownOpen) setGenreDropdownOpen(false);
//     }
//   };

//   const closeAllDropdowns = () => {
//     setGenreDropdownOpen(false);
//     setCountryDropdownOpen(false);
//   };

//   return (
//     <nav className="px-6 py-4 bg-[#000] h-16 w-full flex justify-between items-center font-medium leading-10 tracking-wider text-white">
//       <div className="logo order-2">
//         <Image src={logo} width={120} alt="Logo" />
//       </div>
//       <ul className="hidden md:flex md:items-center md:order-2 text-[14px]">
//         {HomeNavLinks.map(({ id, link, title, dropdown }) => (
//           <li
//             key={id}
//             className="nav-links mx-3 cursor-pointer relative"
//             onMouseEnter={() => title === "Genre" ? toggleGenreDropdown() : title === "Country" ? toggleCountryDropdown() : null}
//             onMouseLeave={() => closeAllDropdowns()}
//           >
//             <Link className="text-white hover:underline" href={link}>
//               {title}
//             </Link>
//             {dropdown && (
//               <ul
//                 className="absolute top-full left-0 mt-2 bg-black rounded-lg py-2 text-white z-10 grid grid-cols-4 gap-4"
//                 style={{ display: title === "Genre" && genreDropdownOpen ? "block" : title === "Country" && countryDropdownOpen ? "block" : "none" }}
//               >
//                 {dropdown.map((group) => (
//                   <div key={group.id} className="px-4">
//                     {group.genres ? (
//                       group.genres.map((genre) => (
//                         <li key={genre.id} className="py-1">
//                           <Link href={genre.link}>
//                             {genre.name}
//                           </Link>
//                         </li>
//                       ))
//                     ) : (
//                       group.countries.map((country) => (
//                         <li key={country.id} className="py-1">
//                           <Link href={country.link}>
//                             {country.name}
//                           </Link>
//                         </li>
//                       ))
//                     )}
//                   </div>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>

//       <button
//         onClick={() => setNav(!nav)}
//         className={`md:hidden text-white rounded-sm ${nav ? "bg-[#5E5E5E]" : "bg-[#121212]"}`}
//       >
//         <GiHamburgerMenu className="pb-[1px]" />
//       </button>
//       {nav && (
//         <div className="absolute top-[60px] w-2/3 z-[2] right-0 flex justify-center">
//           <ul className="absolute top-18 rounded-lg flex flex-col bg-black w-full py-4 items-center text-white">
//             {HomeNavLinks.map(({ id, link, title, dropdown }) => (
//               <li key={id}>
//                 <Link onClick={() => { setNav(!nav); handleMobileDropdownToggle(title); }} href={link}>
//                   {title}
//                 </Link>
//                 {dropdown && (
//                   <ul
//                     className="bg-black rounded-lg py-2 text-white z-10 grid grid-cols-4 gap-4 "
//                     style={{ display: title === "Genre" && genreDropdownOpen ? "block" : title === "Country" && countryDropdownOpen ? "block" : "none" }}
//                   >
//                     {dropdown.map((group) => (
//                       <div key={group.id} className="px-4">
//                         {group.genres ? (
//                           group.genres.map((genre) => (
//                             <li key={genre.id} className="py-1">
//                               <Link href={genre.link}>
//                                 {genre.name}
//                               </Link>
//                             </li>
//                           ))
//                         ) : (
//                           group.countries.map((country) => (
//                             <li key={country.id} className="py-1">
//                               <Link href={country.link}>
//                                 {country.name}
//                               </Link>
//                             </li>
//                           ))
//                         )}
//                       </div>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="text-white order-3">login</div>
//     </nav>
//   );
// };
// "use client"
// import { logo } from "@/public";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { HomeNavLinks } from "@/utils/data";

// export const HomeNav = () => {
//   const [nav, setNav] = useState(false);
//   const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
//   const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

//   const toggleGenreDropdown = () => {
//     setGenreDropdownOpen(!genreDropdownOpen);
//     if (countryDropdownOpen) setCountryDropdownOpen(false);
//   };

//   const toggleCountryDropdown = () => {
//     setCountryDropdownOpen(!countryDropdownOpen);
//     if (genreDropdownOpen) setGenreDropdownOpen(false);
//   };

//   const handleMobileDropdownToggle = (title) => {
//     if (title === "Genre") {
//       setGenreDropdownOpen(!genreDropdownOpen);
//       if (countryDropdownOpen) setCountryDropdownOpen(false);
//     } else if (title === "Country") {
//       setCountryDropdownOpen(!countryDropdownOpen);
//       if (genreDropdownOpen) setGenreDropdownOpen(false);
//     }
//   };

//   const closeAllDropdowns = () => {
//         setGenreDropdownOpen(false);
//         setCountryDropdownOpen(false);
   
   
//   }

//   return (
//     <nav className="px-6 py-4 bg-[#000] h-16 w-full flex justify-between items-center font-medium leading-10 tracking-wider text-white">
//       <div className="logo order-2">
//         <Image src={logo} width={120} alt="Logo" />
//       </div>
//       <ul className="hidden md:flex md:items-center md:order-2 text-[14px]">
//         {HomeNavLinks.map(({ id, link, title, dropdown }) => (
//           <li
//             key={id}
//             className="nav-links mx-3 cursor-pointer relative"
//             onMouseEnter={() => title === "Genre" ? toggleGenreDropdown() : title === "Country" ? toggleCountryDropdown() : null}
//             onMouseLeave={() => closeAllDropdowns()}
//           >
//             <Link className="text-white hover:underline" href={link}>
//               {title}
//             </Link>
//             {dropdown && (
//               <ul
//                 className={`absolute top-full left-0 mt-2 bg-black rounded-lg py-2 text-white z-10 text-xs  `}
//                 style={{ display: title === "Genre" && genreDropdownOpen ? "flex" : title === "Country" && countryDropdownOpen ? "flex" : "none" }}
//               >
//                 {dropdown.map((group) => (
//                   <div key={group.id} className="mx-4   ">
//                     {group.genres ? (
//                       group.genres.map((genre) => (
//                         <li key={genre.id} className="p-2 hover:bg-orange-600">
//                           <Link href={genre.link}>
//                             {genre.name}
//                           </Link>
//                         </li>
//                       ))
//                     ) : (
//                       group.countries.map((country) => (
//                         <li key={country.id} className="py-1">
//                           <Link href={country.link}>
//                             {country.name}
//                           </Link>
//                         </li>
//                       ))
//                     )}
//                   </div>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>

//       <button
//         onClick={() => setNav(!nav)}
//         className={`md:hidden text-white rounded-sm ${nav ? "bg-[#5E5E5E]" : "bg-[#121212]"}`}
//       >
//         <GiHamburgerMenu className="pb-[1px]" />
//       </button>
//       {nav && (
//         <div className="absolute top-[60px] w-2/3 z-[2] right-0 flex justify-center">
//           <ul className="absolute top-18 rounded-lg flex flex-col bg-black w-full py-4 items-center text-white">
//             {HomeNavLinks.map(({ id, link, title, dropdown }) => (
//               <li key={id}>
//                 <Link onClick={() => { setNav(!nav); handleMobileDropdownToggle(title); }} href={link}>
//                   {title}
//                 </Link>
//                 {dropdown && (
//                   <ul
//                     className={`bg-black rounded-lg py-2 text-white z-10 grid grid-cols-2 md:grid-cols-4 gap-4`}
//                     style={{ display: title === "Genre" && genreDropdownOpen ? "flex" : title === "Country" && countryDropdownOpen ? "flex" : "none" }}
//                   >
//                     {dropdown.map((group) => (
//                       <div key={group.id} className="px-4">
//                         {group.genres ? (
//                           group.genres.map((genre) => (
//                             <li key={genre.id} className="py-1">
//                               <Link href={genre.link}>
//                                 {genre.name}
//                               </Link>
//                             </li>
//                           ))
//                         ) : (
//                           group.countries.map((country) => (
//                             <li key={country.id} className="py-1">
//                               <Link href={country.link}>
//                                 {country.name}
//                               </Link>
//                             </li>
//                           ))
//                         )}
//                       </div>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="text-white order-3">login</div>
//     </nav>
//   );
// };
"use client"
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HomeNavLinks } from "@/utils/data";

export const HomeNav = () => {
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

  return (
    <nav className="px-6 py-4 bg-[#1F1F1F] h-16 w-full flex justify-between items-center font-medium leading-10 tracking-wider text-white">
      <div className="logo order-2">
        <Image src={logo} width={120} alt="Logo" />
      </div>
      <ul className="hidden md:flex md:items-center md:order-2 text-[14px]">
        {HomeNavLinks.map(({ id, link, title, dropdown }) => (
          <li
            key={id}
            className="nav-links mx-3 cursor-pointer relative"
            onMouseEnter={title === "Genre" ? openGenreDropdown : title === "Country" ? openCountryDropdown : null}
            onMouseLeave={closeDropdowns}
          >
            <Link className="text-white hover:underline" href={link}>
              {title}
            </Link>
            {dropdown && (
              <ul
                className={`absolute top-full left-0 mt-2 bg-[#1F1F1F] rounded-md  text-white z-10 grid grid-cols-2 md:grid-cols-4 px-3 `}
                onMouseEnter={title === "Genre" ? openGenreDropdown : title === "Country" ? openCountryDropdown : null}
                onMouseLeave={closeDropdowns}
                style={{ display: (title === "Genre" && genreDropdownOpen) || (title === "Country" && countryDropdownOpen) ? "flex" : "none" }}
              >
                {dropdown.map((group) => (
                  <div key={group.id} className="py-4 w-max">
                    {group.genres ? (
                      <ul className="">
                        {group.genres.map((genre) => (
                          <li key={genre.id} className="pr-7 pl-3 text-[15px] leading-7 hover:bg-[#FFE400] hover:text-black">
                            <Link href={genre.link}>
                              {genre.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="">
                        {group.countries.map((country) => (
                          <li key={country.id} className="pr-7 pl-3 text-[15px] leading-7 hover:bg-[#FFE400] hover:text-black">
                            <Link href={country.link}>
                              {country.name}
                            </Link>
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
        className={`md:hidden text-white rounded-sm ${nav ? "bg-[#5E5E5E]" : "bg-[#121212]"}`}
      >
        <GiHamburgerMenu className="pb-[1px]" />
      </button>
      {nav && (
        <div className="absolute top-0 w-5/6 z-50 left-0 transition ease-in duration-200 h-screen ">
          <ul className="absolute top-18 text-xl rounded-lg flex flex-col bg-[#151515] w-full p-8 items-start gap-6 text-white h-screen">
            <div>close</div>
            {HomeNavLinks.map(({ id, link, title, dropdown }) => (
              <li key={id}>
                <Link onClick={() => { setNav(!nav); }} href={link}>
                  {title}
                </Link>
                {dropdown && (
                  <ul
                    className={`bg-[#131313] rounded-lg py-2 text-white z-10 grid grid-cols-2 md:grid-cols-4 gap-4`}
                    style={{ display: (title === "Genre" && genreDropdownOpen) || (title === "Country" && countryDropdownOpen) ? "flex" : "none" }}
                  >
                    {dropdown.map((group) => (
                      <div key={group.id} className="px-4">
                        {group.genres ? (
                          <ul className="divide-y divide-gray-300">
                            {group.genres.map((genre) => (
                              <li key={genre.id} className="py-1">
                                <Link href={genre.link}>
                                  {genre.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="divide-y divide-gray-300">
                            {group.countries.map((country) => (
                              <li key={country.id} className="py-1">
                                <Link href={country.link}>
                                  {country.name}
                                </Link>
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
        </div>
      )}
      <div className="text-white order-3">login</div>
    </nav>
  );
};
