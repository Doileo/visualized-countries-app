import React from "react";

const CountryItem = ({ country }) => {
  return (
    <li className="country-card">
      <h2 className="country-name">{country.name}</h2>
      <p className="country-region">Region: {country.region}</p>
      <p className="country-area">Area: {country.area} km²</p>
    </li>
  );
};

export default CountryItem;
