import React from 'react';
import PropTypes from 'prop-types';

import './SearchInfo.css';

const SearchInfo = ({ searchValue, numberOfResult }) => (
  <div className="searchinfo">
    <span className="pt-icon-large pt-icon-geosearch icon_search_result" />
    {searchValue && <p>{numberOfResult} results for &apos;{searchValue}&apos;</p>}
    {!searchValue && <p>{numberOfResult} products available</p>}
  </div>
);

SearchInfo.propTypes = {
  searchValue: PropTypes.string.isRequired,
  numberOfResult: PropTypes.number.isRequired,
};

export default SearchInfo;
