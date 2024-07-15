"use client";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HomeNavLinks, navLinks } from "@/utils/data";
export const HomeNav = () => {
    
  const [nav, setNav] = useState(false);
  return (
    <nav className="px-6 py-4 bg-[#000]  h-16 w-full flex justify-between items-center  font-medium leading-10 tracking-widest">
      <div className="logo">
        <Image src={logo} width={120}></Image>
      </div>
      <ul className="flex justify-center items-center">
        {HomeNavLinks.map((link, index) => (
          <li key={index} className="mr-6">
            {link.dropdown ? (
              <div className="relative">
                <a
                  href={link.link}
                  className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  {link.title}
                </a>
                <ul className="absolute hidden bg-white shadow-md py-2 w-48">
                  {link.dropdown.map((dropdown, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      {dropdown.genres || dropdown.countries ? (
                        dropdown.genres ? (
                          dropdown.genres.map((genre, index) => (
                            <a
                              key={index}
                              href={genre.link}
                              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                            >
                              {genre.name}
                            </a>
                          ))
                        ) : (
                          dropdown.countries.map((country, index) => (
                            <a
                              key={index}
                              href={country.link}
                              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                            >
                              {country.name}
                            </a>
                          ))
                        )
                      ) : (
                        <a
                          href={dropdown.link}
                          className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                        >
                          {dropdown.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a
                href={link.link}
                className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
              >
                {link.title}
              </a>
            )}
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
import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center py-4">
//       <div className="logo">
//         <img src="logo.png" alt="Logo" />
//       </div>
//       <ul className="flex justify-center items-center">
//         {HomeNavLinks.map((link, index) => (
//           <li key={index} className="mr-6">
//             {link.dropdown ? (
//               <div className="relative">
//                 <a
//                   href={link.link}
//                   className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
//                 >
//                   {link.title}
//                 </a>
//                 <ul className="absolute hidden bg-white shadow-md py-2 w-48">
//                   {link.dropdown.map((dropdown, index) => (
//                     <li key={index} className="px-4 py-2 hover:bg-gray-100">
//                       {dropdown.genres || dropdown.countries ? (
//                         dropdown.genres ? (
//                           dropdown.genres.map((genre, index) => (
//                             <a
//                               key={index}
//                               href={genre.link}
//                               className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
//                             >
//                               {genre.name}
//                             </a>
//                           ))
//                         ) : (
//                           dropdown.countries.map((country, index) => (
//                             <a
//                               key={index}
//                               href={country.link}
//                               className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
//                             >
//                               {country.name}
//                             </a>
//                           ))
//                         )
//                       ) : (
//                         <a
//                           href={dropdown.link}
//                           className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
//                         >
//                           {dropdown.name}
//                         </a>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : (
//               <a
//                 href={link.link}
//                 className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
//               >
//                 {link.title}
//               </a>
//             )}
//           </li>
//         ))}
//       </ul>
//       <div className="login-icon">
//         <i className="fas fa-user" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;