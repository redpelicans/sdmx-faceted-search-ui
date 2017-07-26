import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';


class SearchBar extends Component {

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

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar_leftside">
          <i className="fa fa-search searchicone" aria-hidden="true" />
        </div>
        <input
          spellCheck="false"
          type="text"
          placeholder="Search..."
          name="search"
          className="researchinput"
          onKeyPress={this.startSearch}
          onChange={this.changeSearchValue}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  research: PropTypes.func.isRequired,
};

export default SearchBar;
