import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ dataflows, searchData, showSidePanel, displayShowPanel, search }) => (
  <div className="container">
    <Header
      showSidePanel={showSidePanel}
      displayShowPanel={displayShowPanel}
    />
    <MainPanel
      dataflows={dataflows}
      displayShowPanel={displayShowPanel}
      searchData={searchData}
      search={search}
    />
  </div>
);

Container.propTypes = {
  dataflows: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  searchData: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
};

export default Container;
