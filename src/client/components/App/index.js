import React, { Component } from 'react';
import Media from 'react-media';
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

    return (
      <div className="App">
        <Media query="(max-width: 599px)">
          {matches => matches ? (
            <SidePanel
              showSidePanel={showSidePanel}
              displayShowPanel={this.displayShowPanel}
              visibility="sidehidden"
              behavior="overlay"
            />
         ) : (
           <SidePanel
             showSidePanel={showSidePanel}
             displayShowPanel={this.displayShowPanel}
             visibility="side"
             behavior="push"
           />
         )}
        </Media>
        <Container
          displayShowPanel={this.displayShowPanel}
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
