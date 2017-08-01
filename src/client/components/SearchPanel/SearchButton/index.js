import React from 'react';
import PropTypes from 'prop-types';
import { AnchorButton } from '@blueprintjs/core';

import './SearchButton.css';

const SearchButton = ({ startSearch }) => (
  <div className="searchbuttoncontainer">
    <AnchorButton onClick={startSearch} text="Search" iconName="search" className="searchbutton" />
  </div>
);

SearchButton.propTypes = {
  startSearch: PropTypes.func.isRequired,
};
export default SearchButton;
