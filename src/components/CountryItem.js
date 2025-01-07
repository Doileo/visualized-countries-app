import React from "react";

const CountryItem = ({ country }) => {
  return (
    <li className="list-item">
      {country.name}, {country.region}, {country.area}
    </li>
  );
};

export default CountryItem;
