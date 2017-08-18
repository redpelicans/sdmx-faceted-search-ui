import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';


const SearchBar = ({ search, facets }) => (
  <div className="searchbarcontainer">
    <div className="search_icon_container">
      <span className="pt-icon-large pt-icon-search search_icon" />
    </div>
    <input
      onChange={(event) => {
        event.preventDefault();
        search({ search: event.target.value, facets });
      }}
      className="searchbar_inner"
      placeholder="Search"
      type="text"
    />
  </div>
);

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  facets: PropTypes.object.isRequired,
};
export default SearchBar;
