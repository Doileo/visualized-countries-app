import React from "react";

const Pagination = ({ pageNumbers, setCurrentPage, currentPage }) => {
  const totalPages = pageNumbers.length;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="pagination" aria-label="Pagination Navigation">
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
      <span
        className="current-page"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="arrow"
        aria-label="Go to next page"
      >
        &rarr;
      </button>
    </nav>
  );
};

export default Pagination;
