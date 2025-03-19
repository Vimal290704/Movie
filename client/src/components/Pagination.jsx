import React from "react";

const Pagination = ({
  pageNext,
  pagePrev,
  pageNo,
  disablePrev,
  disableNext,
}) => {
  return (
    <div className="bg-gray-300 p-4 h-[50px] w-full mt-8 flex items-center justify-center gap-4 rounded-lg shadow-md">
      <button
        onClick={pagePrev}
        disabled={disablePrev}
        className={`p-2 rounded-full text-white transition-all duration-300 ${
          disablePrev
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <span className="text-lg font-semibold">{pageNo}</span>

      <button
        onClick={pageNext}
        disabled={disableNext}
        className={`p-2 rounded-full text-white transition-all duration-300 ${
          disableNext
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
