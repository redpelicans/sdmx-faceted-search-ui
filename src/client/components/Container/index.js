import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ dataflows, searchData, sidePanelIsVisible, displayShowPanel, search }) => (
  <div className="container">
    <Header
      sidePanelIsVisible={sidePanelIsVisible}
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
  sidePanelIsVisible: PropTypes.bool,
  displayShowPanel: PropTypes.func.isRequired,
  searchData: PropTypes.object,
  search: PropTypes.func.isRequired,
};

export default Container;
