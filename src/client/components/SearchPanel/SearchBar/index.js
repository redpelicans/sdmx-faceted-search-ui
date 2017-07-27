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
      <div className="searchbarcontainer">
        <input
          onChange={this.changeSearchValue}
          onKeyPress={this.startSearch}
          className="pt-input pt-fill"
          placeholder="Search"
          type="text"
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  research: PropTypes.func.isRequired,
};

export default SearchBar;
