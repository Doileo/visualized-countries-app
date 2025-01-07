import React from "react";

const Filters = ({ handleSort, handleRegionFilter, handleAreaFilter }) => {
  return (
    <div className="filters">
      <button onClick={handleSort}>Sort by name</button>
      <button onClick={() => handleRegionFilter("Oceania")}>
        Oceania only
      </button>
      <button onClick={handleAreaFilter}>Smaller than Lithuania</button>
    </div>
  );
};

export default Filters;
