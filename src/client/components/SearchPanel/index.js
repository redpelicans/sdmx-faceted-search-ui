import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

import './SearchPanel.css';

const SearchPanel = ({ handleSearch }) => (
  <div className="searchpanel">
    <SearchBar
      handleSearch={handleSearch}
    />
  </div>
);

SearchPanel.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchPanel;
