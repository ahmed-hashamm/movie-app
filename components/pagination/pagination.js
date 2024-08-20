import React, { useState } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CgArrowLongRight } from "react-icons/cg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  const [maxVisiblePages, setMaxVisiblePages] = useState(3);

  const getPageNumbers = () => {
    const pageNumbers = [];

    let startPage = currentPage - Math.floor(maxVisiblePages / 2);
    let endPage = currentPage + Math.floor(maxVisiblePages / 2);

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      setMaxVisiblePages(5);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      setMaxVisiblePages(5);
    }
  };

  const handlePageChange = (page) => {
    onPageChange(page);
    setMaxVisiblePages(5);
  };

  const handleStart = () => {
    if (currentPage > 1) {
      onPageChange(1);
      setMaxVisiblePages(3); // reset to 3 when going to the first page
    }
  };

  const handleLast = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages);
      setMaxVisiblePages(5);
    }
  };

  return (
    <div className={`flex justify-center items-center gap-2 lg:mb-10`}>
      <button
        className={`${
          currentPage === 1 ? "hidden" : "block"
        } p-2 hover:bg-black rounded-full text-white`}
        onClick={handleStart}
        disabled={currentPage === 1}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button
        className={`${
          currentPage === 1 ? "hidden" : "block"
        } p-2 hover:bg-black rounded-full text-white`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <CgArrowLongLeft />
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`py-2 px-4 rounded-full ${
            page === currentPage
              ? " bg-[#FFE400] text-black"
              : "text-white hover:bg-black"
          }  ${
            currentPage > 9 && "py-3"
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`${
          currentPage === totalPages ? "hidden" : "block"
        } hover:bg-black p-2 rounded-full text-white`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <CgArrowLongRight />
      </button>
      <button
        className={`${
          currentPage === totalPages ? "hidden" : "block"
        } hover:bg-black p-2 rounded-full text-white`}
        onClick={handleLast}
        disabled={currentPage === totalPages}
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
