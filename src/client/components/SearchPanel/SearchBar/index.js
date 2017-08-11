import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';


const SearchBar = ({ search }) => (
  <div className="searchbarcontainer">
    <input
      onChange={(event) => {
        event.preventDefault();
        search(event.target.value);
      }}
      className="pt-input pt-fill"
      placeholder="Search"
      type="text"
    />
  </div>
);

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
