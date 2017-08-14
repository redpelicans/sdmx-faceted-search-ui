import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';
import Pager from '../Pager';

import './MainPanel.css';


const MainPanel = ({ displayShowPanel, dataflows, searchValue, search, numberOfResult, changePage, page }) => (
  <div className="mainpanel">
    <SearchPanel
      search={search}
    />
    <div className="pt-card mainpanel_inner">
      <ResultPanel
        dataflows={dataflows}
        displayShowPanel={displayShowPanel}
        searchValue={searchValue}
        numberOfResult={numberOfResult}
      />
      {numberOfResult > 10 &&
        <Pager
          numberOfResult={numberOfResult}
          changePage={changePage}
          searchValue={searchValue}
          page={page}
        />
      }
    </div>
  </div>);

MainPanel.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  numberOfResult: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default MainPanel;
