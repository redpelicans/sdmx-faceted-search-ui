import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import Container from '../Container';
import SidePanel from '../SidePanel';
import { search } from '../../actions/dataflows';
import { alert } from '../../actions/message';
import './App.css';

const App = ({ facets, toggleSidePanel, showSidePanel, dataflows,
searchData, search: doSearch }) => (
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
      searchData={searchData}
      search={doSearch}
    />
  </div>
);

App.propTypes = {
  toggleSidePanel: PropTypes.func.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  facets: PropTypes.object.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchData: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
};

App.defaultProps = {
  showSidePanel: false,
};

const actions = { search, alert };

const mapStateToProps = state => ({
  message: state.message,
  facets: state.facets,
  dataflows: state.dataflows,
  searchData: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('showSidePanel', 'toggleshowSidePanel', true),
  withHandlers({ toggleSidePanel: ({ toggleshowSidePanel }) => () => toggleshowSidePanel((showSidePanel) => !showSidePanel) }),
);

export default enhance(App);
