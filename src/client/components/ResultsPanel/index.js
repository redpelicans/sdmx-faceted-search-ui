import React from 'react';
import PropTypes from 'prop-types';

import './results_panel.css';
import SearchInfo from '../SearchInfo';
import DataFlow from '../DataFlow';

const ResultsPanel = ({ results }) => (
  <div className="results-panel-container">
    <SearchInfo numberResults={results.length} />
    <ul>
      { results.map(result => <DataFlow key={result} result={result} />) }
    </ul>
  </div>
);

ResultsPanel.propTypes = {
  results: PropTypes.array.isRequired,
};

export default ResultsPanel;
