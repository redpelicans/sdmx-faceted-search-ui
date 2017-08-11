import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

import './search_info.css';

const SearchInfo = ({ numberResults, searchValue }) => {
  const formatedResult = numberResults > 1 ?
    `${numberResults} results found for ${searchValue}` :
    `${numberResults} result found for ${searchValue}`;
  return (
    <div className="searchinfo">
      <p>{searchValue && formatedResult}</p>
    </div>
  );
};

SearchInfo.propTypes = {
  numberResults: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['numberResults'])(SearchInfo);
