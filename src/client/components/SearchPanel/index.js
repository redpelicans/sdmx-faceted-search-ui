import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

import './SearchPanel.css';

const SearchPanel = ({ Search }) => (
  <div className="searchpanel">
    <SearchBar
      Search={Search}
    />
    <SearchButton
      startSearch={this.startClickSearch}
    />
  </div>
);

SearchPanel.propTypes = {
  Search: PropTypes.func.isRequired,
};

export default SearchPanel;
