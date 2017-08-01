import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSearchValue } from '../../actions';

import connect from '../connect';

import './App.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

const myFilter = (resultList, keyWord) =>
  resultList.filter(item => item.value.match(keyWord.toLowerCase()) !== null);

class App extends Component {
  state = {
    isHidden: true,
  }

  showOverlayPanel = () => {
    this.setState(({ isHidden }) => ({ isHidden: !isHidden }));
  };

  searchHandler = ({ target: { value } }) => {
    const { getSearchValue: get_search_value } = this.props;
    get_search_value(value);
  };

  render() {
    const { isHidden } = this.state;
    const { title, langs, resultItems, searchValue } = this.props;
    return (
      <div className="app-container">
        <div>
          <SidePanel isHidden={isHidden} />
          <Container
            title={title}
            langs={langs}
            resultItems={resultItems}
            showOverlayPanel={this.showOverlayPanel}
            isHidden={isHidden}
            searchHandler={this.searchHandler}
            searchValue={searchValue}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title,
  langs: state.langs,
  resultItems: myFilter(state.resultItems, state.searchValue),
  count: state.count,
  getSearchValue: state.getSearchValue,
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({ getSearchValue: (value) => dispatch(getSearchValue(value)) });

App.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
  getSearchValue: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
