import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withStateHandlers } from 'recompose';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import { search } from '../../actions';
import './App.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

const App = ({ title, langs, resultItems, searchValue, isHidden, search: doSearch, toggleIsHiddenHandler }) => (
  <div className="App">
    <SidePanel
      isHidden={isHidden}
      toggleIsHiddenHandler={toggleIsHiddenHandler}
    />
    <Container
      title={title}
      langs={langs}
      resultItems={resultItems}
      isHidden={isHidden}
      toggleIsHiddenHandler={toggleIsHiddenHandler}
      searchHandler={doSearch}
      searchValue={searchValue}
    />
  </div>
);

const getList = state => state.resultItems;
const getSearchValue = state => state.searchValue;

const filterDataFlows = createSelector(
  [getList, getSearchValue],
  (resultItems, searchValue) => resultItems.filter(item => item.value.match(searchValue.toLowerCase()) !== null),
);

const mapStateToProps = state => ({
  title: state.title,
  langs: state.langs,
  searchValue: state.searchValue,
  resultItems: filterDataFlows(state),
});

const actions = {
  search,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

App.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
  toggleIsHiddenHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    ({ initialIsHidden = true }) => ({
      isHidden: initialIsHidden,
    }),
    {
      toggleIsHiddenHandler: ({ isHidden }) => () => ({
        isHidden: !isHidden,
      }),
    },
  ),
);

export default enhance(App);
