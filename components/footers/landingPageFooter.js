import { footerLinks } from "@/utils/data";
import Link from "next/link";
import React from "react";
const DefaultFooter = () => {
  return (
    <footer className="flex-col justify-center items-center w-full text-white">
      <ul className="p-5 text-[14px] flex flex-wrap justify-center items-center gap-4 tracking-wider">
        {footerLinks.map(({ id, link, title }) => (
          <li
            key={id}
            className="nav-links mx-4  cursor-pointer   flex items-center justify-center    text-white hover:underline "
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>
      <div className=" max-w-3xl text-center   mx-auto p-6 flex flex-col gap-4">
        <p className="text-[#4B4B4B] text-xs ">
          AndyDay is a Free Movies streaming site with zero ads. We let you
          watch movies online without having to register or paying, with over
          10000 movies and TV-Series. You can also Download full movies from
          AndyDay and watch it later if you want.
        </p>
        <span className="text-[12px] ">© AndyDay</span>
      </div>
    </footer>
  );
};

export default DefaultFooter;
