import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Filters = ({
  handleSort,
  handleRegionFilter,
  handleAreaFilter,
  resetFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="filters space-y-2">
      {/* Sort button */}
      <button
        onClick={handleSort}
        className="btn btn-primary flex items-center gap-2"
      >
        Sort by name
      </button>

      {/* Region dropdown button */}
      <div className="dropdown-wrapper w-full relative">
        <button onClick={toggleDropdown} className="btn btn-secondary">
          All Regions
          <ChevronDown
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            size={18}
          />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <ul className="dropdown-menu">
            {["Africa", "Americas", "Asia", "Europe", "Oceania"].map(
              (region) => (
                <li key={region}>
                  <button
                    onClick={() => {
                      handleRegionFilter(region);
                      setIsOpen(false);
                    }}
                  >
                    {region}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>

      {/* Area filter */}
      <button onClick={handleAreaFilter} className="btn btn-tertiary">
        Smaller than Lithuania
      </button>

      {/* Reset */}
      <button onClick={resetFilters} className="btn btn-reset">
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
