import React, { Component } from 'react';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';

import './MainPanel.css';


class MainPanel extends Component {

  state = {
    searchValue: '',
  }
  research = (value) => {
    this.setState({ searchValue: value });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="mainpanel">
        <SearchPanel
          research={this.research}
        />
        <ResultPanel
          searchValue={searchValue}
        />
      </div>
    );
  }
}

export default MainPanel;
