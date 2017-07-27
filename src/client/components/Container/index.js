import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ displayShowPanel }) => (
  <div className="container">
    <Header
      displayShowPanel={displayShowPanel}
    />
    <MainPanel />
  </div>
);

Container.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
};

export default Container;
