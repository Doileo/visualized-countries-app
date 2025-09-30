import React from "react";

/**
 * Pagination component allows users to navigate through multiple pages of content.
 *
 * Props:
 * - pageNumbers: array of page numbers (e.g., [1, 2, 3, 4])
 * - setCurrentPage: function to update the current page in parent component
 * - currentPage: the page number that is currently active
 */
const Pagination = ({ pageNumbers, setCurrentPage, currentPage }) => {
  // Total number of pages, derived from the length of the pageNumbers array
  const totalPages = pageNumbers.length;

  /**
   * Handle clicking the "Previous" button
   * - Only decreases the current page if it's greater than 1
   * - Prevents going to page 0 or negative numbers
   */
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /**
   * Handle clicking the "Next" button
   * - Only increases the current page if it's less than totalPages
   * - Prevents going beyond the last page
   */
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    // Navigation wrapper for the pagination buttons
    // 'aria-label' provides a descriptive name for screen readers
    <nav className="pagination" aria-label="Pagination Navigation">
      {/* Previous Button */}
      {/* 
        - onClick triggers handlePrevious function
        - disabled prevents clicking if on the first page
        - aria-label helps screen readers describe the button
      */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="arrow"
        aria-label="Go to previous page"
      >
        &larr; {/* Left arrow symbol */}
      </button>

      {/* Current Page Display */}
      {/*
        - Shows the current page and total pages
        - role="status" + aria-live="polite" announces updates to screen readers
        - aria-atomic ensures the whole text is read, not just part of it
      */}
      <span
        className="current-page"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      {/* 
        - onClick triggers handleNext function
        - disabled prevents clicking if on the last page
        - aria-label helps screen readers describe the button
      */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="arrow"
        aria-label="Go to next page"
      >
        &rarr; {/* Right arrow symbol */}
      </button>
    </nav>
  );
};

export default Pagination;
