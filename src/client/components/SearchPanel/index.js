import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

import './SearchPanel.css';

class SearchPanel extends Component {
  state = {
    value: '',
  }

  changeSearchValue = ({ target: { value } }) => {
    this.setState({ value });
  };

  startSearch = event => {
    const { research } = this.props;
    if (event.key === 'Enter') { research(this.state.value); }
  };

  startClickSearch = () => {
    const { research } = this.props;
    research(this.state.value);
  };

  render() {
    const { research } = this.props;
    return (
      <div className="searchpanel">
        <SearchBar
          research={research}
          changeSearchValue={this.changeSearchValue}
          startSearch={this.startSearch}
        />
        <SearchButton
          startSearch={this.startClickSearch}
        />
      </div>
    );
  }
}

SearchPanel.propTypes = {
  research: PropTypes.func.isRequired,
};

export default SearchPanel;
