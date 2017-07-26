import React from 'react';
import PropTypes from 'prop-types';

import Connect from '../Connect';

import './app.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

class App extends React.PureComponent {
  render() {
    const { title, langs } = this.props;
    return (
      <div className="app-container">
        <SidePanel />
        <Container title={title} langs={langs} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
};

export default Connect(App);
