import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';

import './MainPanel.css';


const MainPanel = ({ dataflows = [], searchData = {}, search }) => (
  <div className="mainpanel">
    <Media query={{ maxWidth: 800 }}>
      {matches => matches ? (
        <SearchPanel
          search={search}
          searchData={searchData}
          columnsDisplay
        />
      ) : (
        <SearchPanel
          search={search}
          searchData={searchData}
          columnsDisplay={false}
        />
      )}
    </Media>
    <div className="pt-card mainpanel_inner">
      <ResultPanel
        dataflows={dataflows}
        searchValue={searchData.searchValue}
        searchData={searchData}
      />
    </div>
  </div>);

MainPanel.propTypes = {
  dataflows: PropTypes.array.isRequired,
  searchData: PropTypes.object,
  search: PropTypes.func.isRequired,
};

export default MainPanel;
