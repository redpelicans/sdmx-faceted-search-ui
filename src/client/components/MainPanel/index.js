import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';

import './MainPanel.css';


const MainPanel = ({ displayShowPanel, size, list, Search, searchValue }) => (
  <div className="mainpanel">
    <div style={{ width: `${size}%` }} className="pt-card mainpanel_inner">
      <SearchPanel
        Search={Search}
      />
      <ResultPanel
        list={list}
        searchValue={searchValue}
        displayShowPanel={displayShowPanel}
      />
    </div>
  </div>);

MainPanel.propTypes = {
  list: PropTypes.array.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  Search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default MainPanel;
