import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

import './search_bar.css';

const SearchBar = ({ handleInput }) => (
  <div className="search-bar-container">
    <input
      type="text"
      placeholder="Search..."
      onChange={handleInput}
    />
  </div>
);

SearchBar.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default withHandlers({
  handleInput: ({ searchHandler }) => event => {
    event.preventDefault();
    searchHandler(event.target.value);
  },
})(SearchBar);
