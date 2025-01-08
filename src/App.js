import React, { useState, useEffect } from "react";
import "./App.css";
import Filters from "./components/Filters";
import CountryItem from "./components/CountryItem";
import Pagination from "./components/Pagination";

const CountriesList = () => {
  const [contries, setCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [regionFilter, setRegionFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  // Sort contries by name
  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filter countries by region
  const handleRegionFilter = (region) => {
    setRegionFilter(region);
  };

  // Filter contries by area
  const handleAreaFilter = () => {
    setAreaFilter(areaFilter === "ltu" ? "" : "ltu");
  };

  // Apply filters and sorting
  let filteredCountries = contries;

  if (regionFilter) {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === regionFilter
    );
  }

  if (areaFilter) {
    filteredCountries = filteredCountries.filter(
      (country) =>
        country.area < contries.find((c) => c.name === "Lithuania").area
    );
  }

  filteredCountries.sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  // Pagination
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredCountries.length / countriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h1>A visualized representation of countries</h1>

      {/* Buttons for sorting and filtering */}
      <Filters
        handleSort={handleSort}
        handleRegionFilter={handleRegionFilter}
        handleAreaFilter={handleAreaFilter}
      />

      {/* List of countries */}
      <section>
        <ul className="list">
          {currentCountries.map((country) => (
            <CountryItem key={country.name} country={country} />
          ))}
        </ul>
      </section>

      {/* Pagination */}
      <Pagination
        pageNumbers={pageNumbers}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CountriesList;
