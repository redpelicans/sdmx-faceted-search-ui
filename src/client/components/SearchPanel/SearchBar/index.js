import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';


const SearchBar = ({ Search }) => (
  <div className="searchbarcontainer">
    <input
      onChange={Search}
      className="pt-input pt-fill"
      placeholder="Search"
      type="text"
    />
  </div>
);

SearchBar.propTypes = {
  Search: PropTypes.func.isRequired,
};

export default SearchBar;
