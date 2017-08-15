import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import Container from '../Container';
import SidePanel from '../SidePanel';
import { search, changePage } from '../../actions/dataflows';
import { alert } from '../../actions/message';
import './App.css';

const App = ({ facets, toggleSidePanel, showSidePanel, dataflows,
searchValue, search: doSearch, numberOfResult, changePage: doChangePage, page }) => (
  <div className="App">
    <SidePanel
      facets={facets}
      showSidePanel={showSidePanel}
      moveSidePanel={toggleSidePanel}
    />
    <Container
      dataflows={dataflows}
      showSidePanel={showSidePanel}
      displayShowPanel={toggleSidePanel}
      searchValue={searchValue}
      search={doSearch}
      changePage={doChangePage}
      numberOfResult={numberOfResult}
      page={page}
    />
  </div>
);

App.propTypes = {
  toggleSidePanel: PropTypes.func.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  facets: PropTypes.object.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  numberOfResult: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

App.defaultProps = {
  showSidePanel: false,
};

const actions = { search, alert, changePage };

const mapStateToProps = state => ({
  message: state.message,
  facets: state.facets,
  dataflows: state.dataflows,
  searchValue: state.search.searchValue,
  numberOfResult: state.search.numberOfResult,
  page: state.search.page,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('showSidePanel', 'toggleshowSidePanel', true),
  withHandlers({ toggleSidePanel: ({ toggleshowSidePanel }) => () => toggleshowSidePanel((showSidePanel) => !showSidePanel) }),
);

export default enhance(App);
