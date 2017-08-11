import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ dataflows, searchValue, showSidePanel, displayShowPanel, search }) => (
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
    />
  </div>
);

Container.propTypes = {
  dataflows: PropTypes.object.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default Container;
