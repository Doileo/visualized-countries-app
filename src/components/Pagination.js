import React from "react";

const Pagination = ({ pageNumbers, setCurrentPage, currentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
  };

  return (
    <nav className="pagination" aria-label="Pagination Navigation">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="arrow"
        aria-label="Go to previous page"
        aria-disabled={currentPage === 1}
      >
        &larr;
      </button>

      {/* Current Page Display */}
      <span
        className="current-page"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Page {currentPage} of {pageNumbers.length}
      </span>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === pageNumbers.length}
        className="arrow"
        aria-label="Go to next page"
        aria-disabled={currentPage === pageNumbers.length}
      >
        &rarr;
      </button>
    </nav>
  );
};

export default Pagination;
