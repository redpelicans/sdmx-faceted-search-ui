import React, { Component } from 'react';
import Header from '../Header'
import Side from '../Side';
import Searchbox from '../Searchbox';
import Dataflow from '../Dataflow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="all">
          <Side />
          <div className="main">
            <Searchbox />
            <Dataflow />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
