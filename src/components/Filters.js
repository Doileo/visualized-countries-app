import React from "react";

const Filters = ({ handleSort, handleRegionFilter, handleAreaFilter }) => {
  return (
    <div className="filters">
      <button onClick={handleSort} className="btn btn-primary">
        Sort by name
      </button>
      <button
        onClick={() => handleRegionFilter("Oceania")}
        className="btn btn-secondary"
      >
        Filter: Oceania
      </button>
      <button onClick={handleAreaFilter} className="btn btn-tertiary">
        Smaller than Lithuania
      </button>
    </div>
  );
};

export default Filters;
