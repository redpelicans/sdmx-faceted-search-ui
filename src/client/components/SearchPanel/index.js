import React from 'react';

import './search_panel.css';
import SearchBar from '../SearchBar';
import SearchButton from '../SearchButton';

const SearchPanel = () => (
  <div className="search-panel-container">
    <SearchBar />
    <SearchButton />
  </div>
);

export default SearchPanel;
