import React from 'react';
import PropTypes from 'prop-types';

import './main_panel.css';
import SearchPanel from '../SearchPanel/';
import ResultsPanel from '../ResultsPanel';

const MainPanel = ({ results = ['1', '2'] }) => (
  <div className="main-panel-container">
    <SearchPanel className="search-panel-item" />
    <ResultsPanel className="results-panel-item" results={results} />
  </div>
);

MainPanel.propTypes = {
  results: PropTypes.array.isRequired,
};


MainPanel.defaultProps = {
  results: ['1', '2'],
};

export default MainPanel;
