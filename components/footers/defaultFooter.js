import { DefaultFooterLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public";
import React from "react";
const DefaultFooter = () => {
  return (
    <footer className="bg-[#171717] -mt-1 lg:bg-[#000000]  md:flex md:gap-12  md:justify-between md:items-center p-3 md:p-8 text-[#B9B9B9] space-y-5">
      <figure className="logo hidden lg:flex lg:flex-col space-y-4">
        <Image src={logo} width={280} />
        <span className="text-[14px]  ">© AndyDay</span>
      </figure>
      <section className="footer-content md:ml-4 space-y-3 tracking-tight lg:w-4/5">
        <p className="text-sm">
          AndyDay is a Free Movies streaming site with zero ads. We let you
          watch movies online without having to register or paying, with over
          10000 movies and TV-Series. You can also Download full movies from
          AndyDay and watch it later if you want.
        </p>
        <ul className="flex flex-wrap gap-3 items-center md:justify-center    text-white text-[14px]">
          {DefaultFooterLinks.map(({ id, link, title }) => (
            <li key={id} className="  hover:underline ">
              <Link className=" flex" href={link}>
                <p>{title}</p>
                {id != 6 && <span className="mx-3 text-gray-600">-</span>}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="relative p-3 border border-gray-700 md:w-96 text-xs">
        <p>
          AndyDay does not store any files on our server, we only linked to the
          media which is hosted on 3rd party services.
        </p>
        <div className="absolute bg-red-600 w-[10px] h-[10px] rounded-full -top-1 -right-1"></div>
      </div>
      <span className="text-[12px]  lg:hidden ">© AndyDay</span>
    </footer>
  );
};

export default DefaultFooter;
