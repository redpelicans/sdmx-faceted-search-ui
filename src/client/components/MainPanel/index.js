import React from 'react';
import PropTypes from 'prop-types';

import './main_panel.css';
import SearchPanel from '../SearchPanel/';
import ResultsPanel from '../ResultsPanel';

const MainPanel = ({ searchValue, resultItems, searchHandler }) => (
  <div className="main-panel-container">
    <SearchPanel
      className="search-panel-item"
      searchHandler={searchHandler}
    />
    <ResultsPanel
      className="results-panel-item"
      resultItems={resultItems}
      searchValue={searchValue}
    />
  </div>
);

MainPanel.propTypes = {
  resultItems: PropTypes.array.isRequired,
  searchHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default MainPanel;
