import React from 'react';
import PropTypes from 'prop-types';
import DataFlow from '../DataFlow';
import SearchInfo from '../SearchInfo';
import connect from '../../connect';

import './ResultPanel.css';

const ResultPanel = ({ searchValue, list }) => (
  <div className="resultpanel">
    <SearchInfo
      list={list}
      searchValue={searchValue}
    />
    {list.map(lis => ((lis === searchValue || !searchValue) &&
      <DataFlow key={lis.id} data={lis} />
    )) }
  </div>
);

ResultPanel.propTypes = {
  searchValue: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default connect(ResultPanel);
