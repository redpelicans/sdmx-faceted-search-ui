import React from 'react';
import PropTypes from 'prop-types';

import './SearchInfo.css';

const SearchInfo = ({ list, searchValue }) => (
  <div className="searchinfo">
    {searchValue && <p>{list.length} results for {searchValue}</p>}
    {!searchValue && <p>{list.length} products available</p>}
  </div>
);

SearchInfo.propTypes = {
  list: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchInfo;
