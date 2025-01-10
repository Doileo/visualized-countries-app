import React from "react";

const Filters = ({
  handleSort,
  handleRegionFilter,
  handleAreaFilter,
  resetFilters,
}) => {
  return (
    <div className="filters">
      <button onClick={handleSort} className="btn btn-primary">
        Sort by name
      </button>
      <select
        onChange={(e) => handleRegionFilter(e.target.value)}
        className="btn btn-secondary"
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <button onClick={handleAreaFilter} className="btn btn-tertiary">
        Smaller than Lithuania
      </button>
      <button onClick={resetFilters} className="btn btn-reset">
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
