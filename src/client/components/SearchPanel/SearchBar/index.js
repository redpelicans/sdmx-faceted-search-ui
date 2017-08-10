import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';


const SearchBar = ({ handleSearch }) => (
  <div className="searchbarcontainer">
    <input
      onChange={(event) => {
        event.preventDefault();
        handleSearch(event.target.value);
      }}
      className="pt-input pt-fill"
      placeholder="Search"
      type="text"
    />
  </div>
);

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
