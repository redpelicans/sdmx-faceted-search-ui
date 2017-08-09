import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';

import './MainPanel.css';


const MainPanel = ({ displayShowPanel, dataflows, search, searchValue }) => (
  <div className="mainpanel">
    <div className="pt-card mainpanel_inner">
      <SearchPanel
        search={search}
      />
      <ResultPanel
        dataflows={dataflows}
        searchValue={searchValue}
        displayShowPanel={displayShowPanel}
      />
    </div>
  </div>);

MainPanel.propTypes = {
  searchValue: PropTypes.string.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  dataflows: PropTypes.array.isRequired,
};

export default MainPanel;
