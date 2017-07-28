import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ showSidePanel, displayShowPanel }) => (
  <div className="container">
    <Header
      showSidePanel={showSidePanel}
      displayShowPanel={displayShowPanel}
    />
    <MainPanel />
  </div>
);

Container.propTypes = {
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default Container;
