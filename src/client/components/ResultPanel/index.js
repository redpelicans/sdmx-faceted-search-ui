import React from 'react';
import PropTypes from 'prop-types';
import DataFlow from '../DataFlow';
import SearchInfo from '../SearchInfo';

import './ResultPanel.css';

const list = [
  'Vtt1',
  'Vtt2',
  'Vtt3',
  'Vtt4',
  'Vtt5',
  'Vtt6',
  'Vtt7',
  'Vtt8',
  'Vtt9',
  'Vtt10',
  'Vtt11',
  'Vtt12',
];

const ResultPanel = ({ searchValue }) => (
  <div className="resultpanel">
    <SearchInfo
      list={list}
      searchValue={searchValue}
    />
    {list.map(lis => ((lis === searchValue || !searchValue) && <DataFlow key={lis} name={lis} />)) }
  </div>
);
ResultPanel.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default ResultPanel;
