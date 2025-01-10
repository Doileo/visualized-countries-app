import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Filters from "./components/Filters";
import CountryItem from "./components/CountryItem";
import Pagination from "./components/Pagination";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [regionFilter, setRegionFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredCountries = useMemo(() => {
    let result = [...countries];

    if (regionFilter) {
      result = result.filter((c) => c.region === regionFilter);
    }

    if (areaFilter) {
      result = result.filter(
        (c) => c.area < countries.find((c) => c.name === "Lithuania").area
      );
    }

    result.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return result;
  }, [countries, regionFilter, areaFilter, sortOrder]);

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

  const resetFilters = () => {
    setRegionFilter("");
    setAreaFilter("");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  if (loading) return <p>Loading countries...</p>;

  return (
    <div className="container">
      <h1>A visualized representation of countries</h1>

      <Filters
        handleSort={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        handleRegionFilter={setRegionFilter}
        handleAreaFilter={() =>
          setAreaFilter(areaFilter === "ltu" ? "" : "ltu")
        }
        resetFilters={resetFilters}
      />

      <section>
        {currentCountries.length === 0 ? (
          <p>No countries match your filters.</p>
        ) : (
          <ul className="list">
            {currentCountries.map((country) => (
              <CountryItem key={country.name} country={country} />
            ))}
          </ul>
        )}
      </section>

      <Pagination
        pageNumbers={pageNumbers}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CountriesList;
