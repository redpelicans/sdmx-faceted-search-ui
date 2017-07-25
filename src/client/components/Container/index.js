import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ displayShowPanel, showSidePanel }) => (
  <div className="container">
    <Header
      displayShowPanel={displayShowPanel}
      showSidePanel={showSidePanel}
    />
    <MainPanel />
  </div>
);

Container.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
};

export default Container;
