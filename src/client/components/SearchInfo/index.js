import React from 'react';
import PropTypes from 'prop-types';

import './search_info.css';

const SearchInfo = ({ numberResults }) => (
  <div className="search-info-container">
    <p>{ numberResults } results found.</p>
  </div>
);

SearchInfo.propTypes = {
  numberResults: PropTypes.number.isRequired,
};

export default SearchInfo;
