import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';


const SearchBar = ({ changeSearchValue, startSearch }) => (
  <div className="searchbarcontainer">
    <input
      onChange={changeSearchValue}
      onKeyPress={startSearch}
      className="pt-input pt-fill"
      placeholder="Search"
      type="text"
    />
  </div>
);

SearchBar.propTypes = {
  changeSearchValue: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};

export default SearchBar;
