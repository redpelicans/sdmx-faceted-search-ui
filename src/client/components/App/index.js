import React from 'react';
import PropTypes from 'prop-types';

import connect from '../connect';

import './app.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

const App = ({ title, langs, resultItems }) => (
  <div className="app-container">
    <SidePanel />
    <Container title={title} langs={langs} resultItems={resultItems} />
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
};

export default connect(App);
