import React, { Component } from 'react';

class CountriesList extends Component {
  // Define the state for countries, sort order, region filter, and area filter
  state = {
    countries: [],
    sortOrder: 'asc',
    regionFilter: '',
    areaFilter: ''
  };

  // Fetch the data from the API when the component is mounted
  componentDidMount() {
    fetch('https://restcountries.com/v2/all?fields=name,region,area')
      .then(response => response.json())
      .then(data => {
        this.setState({ countries: data });
      })
      .catch(error => console.error(error));
  }

  // Function to sort the countries
  sortCountries = () => {
    this.setState(prevState => ({
      sortOrder: prevState.sortOrder === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Function to filter the countries by region
  filterByRegion = region => {
    this.setState({ regionFilter: region });
  };

  // Function to filter the countries by area
  filterByArea = () => {
    this.setState(prevState => ({
      areaFilter: prevState.areaFilter === 'ltu' ? '' : 'ltu'
    }));
  };

  render() {
    // Destructure the state values
    const { countries, sortOrder, regionFilter, areaFilter } = this.state;
    let filteredCountries = countries;

    // Filter the countries by region if the region filter is set
    if (regionFilter) {
      filteredCountries = filteredCountries.filter(
        country => country.region === regionFilter
      );
    }

    // Filter the countries by area if the area filter is set
    if (areaFilter) {
      filteredCountries = filteredCountries.filter(
        country => country.area < countries.find(c => c.name === 'Lithuania').area
      );
    }

    // Sort the filtered countries based on the sort order
    filteredCountries.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return (
      <div>
        <button onClick={this.sortCountries}>Sort by Name</button>
        <button onClick={() => this.filterByRegion('Oceania')}>
          Filter by Region: Oceania
        </button>
        <button onClick={this.filterByArea}>
          Filter by Area: smaller than Lithuania
        </button>
        <ul>
          {filteredCountries.map(country => (
            <li key={country.name}>
              {country.name}, {country.region}, {country.area}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountriesList;

