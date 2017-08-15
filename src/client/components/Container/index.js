import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ dataflows, searchValue, showSidePanel, displayShowPanel, search, numberOfResult, changePage, page }) => (
  <div className="container">
    <Header
      showSidePanel={showSidePanel}
      displayShowPanel={displayShowPanel}
    />
    <MainPanel
      dataflows={dataflows}
      displayShowPanel={displayShowPanel}
      searchValue={searchValue}
      search={search}
      numberOfResult={numberOfResult}
      changePage={changePage}
      page={page}
    />
  </div>
);

Container.propTypes = {
  dataflows: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  numberOfResult: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Container;
