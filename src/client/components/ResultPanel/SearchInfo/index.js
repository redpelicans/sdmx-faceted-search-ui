import React from 'react';
import PropTypes from 'prop-types';

import './SearchInfo.css';

const SearchInfo = ({ searchValue, numFound }) => (
  <div className="searchinfo">
    <span className="pt-icon-large pt-icon-geosearch icon_search_result" />
    {searchValue && <p>{numFound} results for &apos;{searchValue}&apos;</p>}
    {!searchValue && <p>{numFound} products available</p>}
  </div>
);

SearchInfo.propTypes = {
  searchValue: PropTypes.string.isRequired,
  numFound: PropTypes.number.isRequired,
};

SearchInfo.defaultProps = {
  numFound: 0,
};

export default SearchInfo;
