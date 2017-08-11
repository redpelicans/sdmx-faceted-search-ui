import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

import './search_bar.css';

const SearchBar = ({ handleInput }) => (
  <div className="searchbarcontainer">
    <input
      type="text"
      placeholder="Search..."
      className="pt-input pt-fill"
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
