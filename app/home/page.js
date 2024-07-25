"use client";
import MoviesButton from "@/components/buttons/moviesButton";
import ShowsButton from "@/components/buttons/showsButton";
import DefaultFooter from "@/components/footers/defaultFooter";
import HomeHero from "@/components/homeHero/hero";
import LoginForm from "@/components/loginform/loginFOrm";
import MoviesSection from "@/components/moviesSection/moviesSection";
import { DefaultNav } from "@/components/navbars/defaulNav";
import Socials from "@/components/socials/socials";
import  { useGlobalContext } from "@/context/Context";
import React, {useState } from "react";
const Home = () => {
  const [activeButton, setActiveButton] = useState("movies");
  const [pageNum, setPageNum] = useState(1);
  const {login ,setLogin} =useGlobalContext();

  const handleMoviesClick = () => {
    setActiveButton("movies");
    setPageNum(1);
  };

  const handleShowsClick = () => {
    setActiveButton("shows");
    setPageNum(9);
  };

  return (
    <>
      {login && (
        <div className="fixed inset-0 bg-[#111111] bg-opacity-80 flex items-center justify-center z-50">
          <LoginForm onClose={() => setLogin(false)} />
        </div>
      )}
      <section
        className={`relative ${login ? 'opacity-50' : 'opacity-100'} `}
      >
        <DefaultNav
          visibility={"lg:hidden"}
          bgColor={"bg-[#000}"}
          desktopNavColor={"bg-[#1F1F1F]"}
          longinButtonBg={"md:bg-[#333333]"}
          login={login}
          setLogin={setLogin}
        />
        <HomeHero />
        <section
          className={`bg-[#1F1F1F] h-max lg:bg-[#111111] py-2 lg:py-16 px-4`}
        >
          <Socials />
          <div className="flex gap-x-6 p-6 pb-0">
            <h2 className="text-3xl text-white hidden md:block">Trending</h2>
            <div className="flex gap-2">
              <MoviesButton isActive={activeButton} onClick={handleMoviesClick} />
              <ShowsButton isActive={activeButton} onClick={handleShowsClick} />
            </div>
          </div>
          <MoviesSection
            pageNO={pageNum}
            category={activeButton === "movies" ? "Movie" : "TV"}
            heading={""}
          />
          <MoviesSection heading={"Latest Movies"} pageNO={3} category={"Movie"} />
          <MoviesSection heading={"Latest TV Shows"} pageNO={5} category={"TV"} />
          <MoviesSection heading={"Coming Soon"} pageNO={8} category={"Soon"} />
        </section>
        <DefaultFooter />
      </section>
    </>
  );
};

export default Home;
