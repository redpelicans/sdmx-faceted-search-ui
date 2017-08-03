<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';

import './MainPanel.css';


const MainPanel = ({ displayShowPanel, size, dataflows, Search, searchValue }) => (
  <div className="mainpanel">
    <div style={{ width: `${size}%` }} className="pt-card mainpanel_inner">
      <SearchPanel
        Search={Search}
      />
      <ResultPanel
        dataflows={dataflows}
        searchValue={searchValue}
        displayShowPanel={displayShowPanel}
      />
    </div>
  </div>);

MainPanel.propTypes = {
  dataflows: PropTypes.array.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  Search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './main_panel.css';
import SearchPanel from '../SearchPanel/';
import ResultsPanel from '../ResultsPanel';

class MainPanel extends Component {
  state = {
    searchValue: '',
  };

  getSearchValue = value => {
    this.setState({ searchValue: value });
  };

  render() {
    const { searchValue } = this.state;
    const { resultItems } = this.props;

    return (
      <div className="main-panel-container">
        <SearchPanel
          className="search-panel-item"
          getSearchValue={this.getSearchValue}
        />
        <ResultsPanel
          className="results-panel-item"
          resultItems={resultItems}
          searchValue={searchValue}
        />
      </div>
    );
  }
}

MainPanel.propTypes = {
  resultItems: PropTypes.array.isRequired,
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
};

export default MainPanel;
