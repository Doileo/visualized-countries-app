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
        aria-label={`Go to previous page, current page ${currentPage}`}
      >
        &larr;
      </button>

      {/* Page Numbers */}
      <ul className="page-numbers">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => setCurrentPage(number)}
              aria-current={currentPage === number ? "page" : undefined}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      {/* Current Page Display */}
      <span className="current-page" role="status" aria-live="polite">
        Page {currentPage} of {pageNumbers.length}
      </span>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === pageNumbers.length}
        className="arrow"
        aria-label={`Go to next page, current page ${currentPage}`}
      >
        &rarr;
      </button>
    </nav>
  );
};

export default Pagination;
