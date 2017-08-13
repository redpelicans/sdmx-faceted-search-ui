import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';
import Pager from '../Pager';

import './MainPanel.css';


const MainPanel = ({ displayShowPanel, dataflows, searchValue, search }) => (
  <div className="mainpanel">
    <SearchPanel
      search={search}
    />
    <div className="pt-card mainpanel_inner">
      <ResultPanel
        dataflows={dataflows}
        displayShowPanel={displayShowPanel}
        searchValue={searchValue}
      />
      {dataflows.length > 0 && <Pager />}
    </div>
  </div>);

MainPanel.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default MainPanel;
