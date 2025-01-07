import React from "react";

const Pagination = ({ pageNumbers, setCurrentPage, currentPage }) => {
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
