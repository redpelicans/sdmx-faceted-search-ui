import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { displayShowPanel, size, list } = this.props;

    return (
      <div className="mainpanel">
        <div style={{ width: `${size}%` }} className="pt-card mainpanel_inner">
          <SearchPanel
            research={this.research}
          />
          <ResultPanel
            list={list}
            searchValue={searchValue}
            displayShowPanel={displayShowPanel}
          />
        </div>
      </div>
    );
  }
}

MainPanel.propTypes = {
  list: PropTypes.array.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};

export default MainPanel;
