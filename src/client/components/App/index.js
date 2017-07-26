import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from '../../connect';
import Container from '../Container';
import SidePanel from '../SidePanel';

import './App.css';

class App extends Component {
  state = {
    showSidePanel: true,
  }

  displayShowPanel = () => {
    this.setState(({ showSidePanel }) => ({ showSidePanel: !showSidePanel }));
  }

  render() {
    const { showSidePanel } = this.state;
    const { title } = this.props;
    return (
      <div className="App">
        <SidePanel
          showSidePanel={showSidePanel}
          displayShowPanel={this.displayShowPanel}
        />
        <Container
          title={title}
        />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

App.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default connect(App);
