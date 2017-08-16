import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';
import Pager from '../Pager';

import './MainPanel.css';


const MainPanel = ({ dataflows = [], searchData = {}, search }) => (
  <div className="mainpanel">
    <SearchPanel
      search={search}
    />
    <div className="pt-card mainpanel_inner" style={{ minHeight: 100 * (dataflows.length + 1) }}>
      <ResultPanel
        dataflows={dataflows}
        searchValue={searchData.searchValue}
        searchData={searchData}
      />
      <Pager
        numFound={searchData.numFound}
        start={searchData.start}
        count={searchData.count}
        searchValue={searchData.searchValue}
        search={search}
      />
    </div>
  </div>);

MainPanel.propTypes = {
  dataflows: PropTypes.array.isRequired,
  searchData: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
};

export default MainPanel;
