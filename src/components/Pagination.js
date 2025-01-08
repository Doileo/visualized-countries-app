import React from "react";

const Pagination = ({ pageNumbers, setCurrentPage, currentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="arrow"
        aria-label="Go to previous page"
      >
        &larr;
      </button>

      {/* Current Page Display */}
      <span className="current-page">
        Page {currentPage} of {pageNumbers.length}
      </span>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === pageNumbers.length}
        className="arrow"
        aria-label="Go to next page"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
