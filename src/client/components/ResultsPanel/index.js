import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

import './results_panel.css';
import SearchInfo from '../SearchInfo';
import DataFlow from '../DataFlow';

const ResultsPanel = ({ resultItems, searchValue }) => {
  const display = resultItems.map(result => <DataFlow key={result.id} result={result.value} />);
  return (
    <div className="results-panel-container">
      <SearchInfo numberResults={resultItems.length} searchValue={searchValue} />
      <ul>
        {display}
      </ul>
    </div>
  );
};

ResultsPanel.propTypes = {
  resultItems: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['searchValue'])(ResultsPanel);
