import React, { Component } from 'react';
import Container from '../Container';
import SidePanel from '../SidePanel';

import './App.css';

class App extends Component {
  state = {
    showSidePanel: true,
  }

  displayShowPanel = () => {
    const { showSidePanel } = this.state;

    this.setState({ showSidePanel: !showSidePanel });
  }

  render() {
    const { showSidePanel } = this.state;
    return (
      <div className="App">
        <SidePanel
          showSidePanel={showSidePanel ? 'hidden' : ''}
          displayShowPanel={this.displayShowPanel}
        />
        <Container
          showSidePanel={showSidePanel}
          displayShowPanel={this.displayShowPanel}
        />
      </div>
    );
  }
}

export default App;
