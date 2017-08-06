import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';

import './MainPanel.css';


const MainPanel = ({ displayShowPanel, sortTypes, dataflows, search, searchValue, marques, sortByMark }) => (
  <div className="mainpanel">
    <div className="pt-card mainpanel_inner">
      <SearchPanel
        search={search}
      />
      <ResultPanel
        dataflows={dataflows}
        marques={marques}
        searchValue={searchValue}
        displayShowPanel={displayShowPanel}
        sortByMark={sortByMark}
        sortTypes={sortTypes}
      />
    </div>
  </div>);

MainPanel.propTypes = {
  searchValue: PropTypes.string.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  sortByMark: PropTypes.func.isRequired,
  dataflows: PropTypes.array.isRequired,
  marques: PropTypes.array.isRequired,
  sortTypes: PropTypes.array.isRequired,
};

export default MainPanel;
