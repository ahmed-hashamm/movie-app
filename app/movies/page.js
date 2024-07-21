"use client";
import React, { useState } from "react";
import FilterButton from "@/components/buttons/filterButton";
import DefaultFooter from "@/components/footers/defaultFooter";
import MoviesSection from "@/components/moviesSection/moviesSection";
import { DefaultNav } from "@/components/navbars/defaulNav";
import Pagination from "@/components/pagination/pagination";
import MobSearchBar from "@/components/homeHero/mobSearchBAr";
import FilterComponent from "@/components/filter/filterComponent";

const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const totalPages = 10; // Adjust this based on your data

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleFilterDropdown = () => {
    setFilterDropdown(!filterDropdown);
  };
  return (
    <>
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
            Popular Movies
          </h1>
          <FilterButton onClick={handleFilterDropdown} />
        </div>
        <FilterComponent 
        visibility={filterDropdown ? "block" : "hidden"}
        />
      </div>
      <section className="bg-[#282828] md:bg-[#111111] py-2 lg:py-10 ">
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
        <MoviesSection pageNO={currentPage} category={"Movie"} />
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
      </section>
      <DefaultFooter />
    </>
  );
};

export default MoviesPage;
