import React from 'react';

import './SearchInfo.css';

const SearchInfo = ({ list }) => (
  <div className="searchinfo">
    <p>{list.length} results for...</p>
  </div>
);

export default SearchInfo;
