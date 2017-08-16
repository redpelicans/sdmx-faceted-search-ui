import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { search } from '../../actions/dataflows';
import Alert from '../Alert';
import Container from '../Container';
import SidePanel from '../SidePanel';
import './App.css';

const App = ({ facets, toggleSidePanel, sidePanelIsVisible, dataflows,
searchData, search: doSearch, message }) => (
  <div className="App">
    <Alert message={message} />
    <SidePanel
      facets={facets}
      sidePanelIsVisible={sidePanelIsVisible}
      moveSidePanel={toggleSidePanel}
    />
    <Container
      dataflows={dataflows}
      sidePanelIsVisible={sidePanelIsVisible}
      displayShowPanel={toggleSidePanel}
      searchData={searchData}
      search={doSearch}
    />
  </div>
);

App.propTypes = {
  toggleSidePanel: PropTypes.func.isRequired,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  facets: PropTypes.object.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchData: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  message: PropTypes.object,
};

const actions = { search };

const mapStateToProps = state => ({
  message: state.message,
  facets: state.facets,
  dataflows: state.dataflows,
  searchData: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('sidePanelIsVisible', 'showSidePanel', true),
  withHandlers({ toggleSidePanel: ({ showSidePanel }) => () => showSidePanel(sidePanelIsVisible => !sidePanelIsVisible) }),
);

export default enhance(App);
