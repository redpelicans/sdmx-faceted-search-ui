import React from 'react';
import PropTypes from 'prop-types';

import './search_bar.css';

const SearchBar = ({ searchHandler }) => (
  <div className="search-bar-container">
    <input
      type="text"
      placeholder="Search..."
      onChange={searchHandler}
    />
  </div>
);

SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

export default SearchBar;
