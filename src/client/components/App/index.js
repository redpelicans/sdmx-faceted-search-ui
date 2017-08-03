import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withHandlers, withState } from 'recompose';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { search, setVisibility } from '../../actions';

import './App.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

const App = ({ title, langs, resultItems, searchValue, isHidden, search: doSearch, setVisibility: doSetVisibility }) => (
  <div className="App">
    <SidePanel isHidden={isHidden} />
    <Container
      title={title}
      langs={langs}
      resultItems={resultItems}
      showOverlayPanel={doSetVisibility}
      isHidden={isHidden}
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
  isHidden: state.isHidden,
  searchValue: state.searchValue,
  resultItems: filterDataFlows(state),
});

const actions = {
  search,
  setVisibility,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

App.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
  setVisibility: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('isHidden', 'doSetVisibility', true),
  withHandlers({ togglePanel: ({ doSetVisibility, isHidden }) => () => doSetVisibility(!isHidden) }),
);

export default enhance(App);
