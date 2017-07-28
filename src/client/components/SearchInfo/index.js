import React from 'react';
import PropTypes from 'prop-types';
import SortBox from './SortBox';

import './SearchInfo.css';

const SearchInfo = ({ list, searchValue }) => (
  <div className="searchinfo">
    <div className="searchcounter">
      {searchValue && <p className="searchcountertext">{list.length} results for {searchValue}</p>}
      {!searchValue && <p className="searchcountertext">{list.length} products available</p>}
    </div>
    <SortBox />
  </div>
);

SearchInfo.propTypes = {
  list: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchInfo;
