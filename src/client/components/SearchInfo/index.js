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
    <div className="pt-button-group typeselector">
      <a className="pt-button" tabIndex="0" role="button">Tout</a>
      <a className="pt-button" tabIndex="0" role="button">Enchères</a>
      <a className="pt-button" tabIndex="0" role="button">Achat immédiat</a>
    </div>
    <SortBox />
  </div>
);

SearchInfo.propTypes = {
  list: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchInfo;
