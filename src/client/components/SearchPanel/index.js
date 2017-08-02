import React from 'react';
import PropTypes from 'prop-types';

import './search_panel.css';
import SearchBar from '../SearchBar';

const SearchPanel = ({ searchHandler }) => (
  <div className="search-panel-container">
    <SearchBar searchHandler={searchHandler} />
  </div>
);

SearchPanel.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

export default SearchPanel;
