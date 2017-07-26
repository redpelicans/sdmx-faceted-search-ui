import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

import './SearchPanel.css';

const SearchPanel = ({ research }) => (
  <div className="searchpanel">
    <SearchBar
      research={research}
    />
    <SearchButton />
  </div>
);

SearchPanel.propTypes = {
  research: PropTypes.func.isRequired,
};

export default SearchPanel;
