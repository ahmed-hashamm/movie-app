"use client";
import React, { useState } from "react";
import FilterButton from "@/components/buttons/filterButton";
import DefaultFooter from "@/components/footers/defaultFooter";
import MoviesSection from "@/components/displaySection/displaySection";
import { DefaultNav } from "@/components/navbars/defaulNav";
import Pagination from "@/components/pagination/pagination";
import MobSearchBar from "@/components/searchBars/mobSearchBAr";
import FilterComponent from "@/components/filter/filterComponent";
import { useGlobalContext } from "@/context/Context";
import LoginForm from "@/components/loginform/loginFOrm";

  

const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(10);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const { login, setLogin } = useGlobalContext();
  const totalPages = 20; 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleFilterDropdown = () => {
    setFilterDropdown(!filterDropdown);
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
        visibility={"visible"}
        bgColor={"bg-[#000]"}
        longinButtonBg={"bg-[#000]"}
      />
      <nav className="relative lg:hidden flex justify-center items-center  px-1 pb-6 sm:pt-2  w-full bg-black">
        <MobSearchBar />
      </nav>
      <div className=" p-6 bg-[#282828] md:bg-[#111111] space-y-4">
        <div className="flex justify-between ">
          <h1 className="text-[#E2E6EA] text-xl md:text-2xl lg:text-3xl font-light">
            Popular TV Shows
          </h1>
          <FilterButton onClick={handleFilterDropdown} />
        </div>
        <FilterComponent onClick={handleFilterDropdown} visibility={filterDropdown ? "block" : "hidden"} />
      </div>
      <section className="bg-[#282828] md:bg-[#111111] py-2 lg:py-10 ">
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
          startingPage={10}
        />
        <MoviesSection pageNO={currentPage} category={"TV"} />
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
          startingPage={10}
        />
      </section>
      <DefaultFooter />
      </section>
    </>
  );
};

export default MoviesPage;
