import React from "react";
import MobSearchBar from "../searchBars/mobSearchBAr";
import DesktopSearchBAr from "../searchBars/desktopSearchBAr";
const HomeHero = () => {
  return (
    <>
      <section className="relative lg:hidden flex justify-center items-center  px-1 pb-6 sm:pt-2  w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:14px_24px]"></div>{" "}
        <MobSearchBar />
      </section>

      <section className="hidden  relative lg:flex  h-44  lg:flex-col  bg-[#1F1F1F] items-center justify-center p-14 gap-8 ">
        <h1 className="text-3xl bg-[#1F1F1F] text-white font-thin mb-3">
          Find Movies, TV shows and more
        </h1>
        <div className="absolute -bottom-10 w-full ">
          <DesktopSearchBAr />
        </div>
      </section>
    </>
  );
};

export default HomeHero;
