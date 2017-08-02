import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withHandlers, withState } from 'recompose';
import PropTypes from 'prop-types';
import { search, setVisibility } from '../../actions';

import './App.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

const filterDataFlows = (resultList, keyWord) =>
  resultList.filter(item => item.value.match(keyWord.toLowerCase()) !== null);

const App = ({ title, langs, resultItems, searchValue, isHidden, search: doSearch, setVisibility: doSetVisibility }) => (
  <div className="app-container">
    <div>
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
  </div>
);

const mapStateToProps = state => ({
  title: state.title,
  langs: state.langs,
  resultItems: filterDataFlows(state.resultItems, state.searchValue),
  searchValue: state.searchValue,
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
