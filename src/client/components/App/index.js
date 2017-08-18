import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { search } from '../../actions/dataflows';
import Alert from '../Alert';
import { setLocale } from '../../actions/intl';
import Container from '../Container';
import SidePanel from '../SidePanel';
import './App.css';

const App = ({ facets, toggleSidePanel, sidePanelIsVisible, dataflows,
searchData, search: doSearch, message, setLocale: doSetLocale, config = {}, intl = {} }) => (
  <div className="App">
    <Alert message={message} />
    <SidePanel
      facets={facets}
      sidePanelIsVisible={sidePanelIsVisible}
      moveSidePanel={toggleSidePanel}
    />
    <Container
      langs={config.langs}
      currentLanguage={intl.locale}
      setLocale={doSetLocale}
      dataflows={dataflows}
      sidePanelIsVisible={sidePanelIsVisible}
      displayShowPanel={toggleSidePanel}
      searchData={searchData}
      search={doSearch}
    />
  </div>
);

App.propTypes = {
  intl: PropTypes.object,
  setLocale: PropTypes.func.isRequired,
  toggleSidePanel: PropTypes.func.isRequired,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  facets: PropTypes.object.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchData: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  message: PropTypes.object,
  config: PropTypes.object,
};

const actions = { search, setLocale };

const mapStateToProps = state => ({
  message: state.message,
  config: state.config,
  facets: state.facets,
  dataflows: state.dataflows,
  searchData: state.search,
  intl: state.intl,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('sidePanelIsVisible', 'showSidePanel', true),
  withHandlers({ toggleSidePanel: ({ showSidePanel }) => () => showSidePanel(sidePanelIsVisible => !sidePanelIsVisible) }),
);

export default enhance(App);
