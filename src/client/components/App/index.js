import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Media from 'react-media';
import { compose, withHandlers, withState } from 'recompose';
import { getFacets } from '../../selectors';
import { search } from '../../actions/dataflows';
import Alert from '../Alert';
import { setLocale } from '../../actions/intl';
import Container from '../Container';
import SidePanel from '../SidePanel';
import './App.css';

const App = ({ facets, toggleSidePanel, sidePanelIsVisible, dataflows,
searchData, search: doSearch, message,
setLocale: doSetLocale, config = {}, intl = {} }) => (
  <div className="App">
    <Alert message={message} />
    <Media query={{ maxWidth: 599 }}>
      {matches => matches ? (
        <SidePanel
          facets={facets}
          sidePanelIsVisible={sidePanelIsVisible}
          moveSidePanel={toggleSidePanel}
          overlay
          search={doSearch}
        />
      ) : (
        <SidePanel
          facets={facets}
          sidePanelIsVisible={sidePanelIsVisible}
          moveSidePanel={toggleSidePanel}
          overlay={false}
          search={doSearch}
        />
      )}
    </Media>
    <Media query={{ maxWidth: 599 }}>
      {matches => matches ? (
        <Container
          langs={config.langs}
          currentLanguage={intl.locale}
          setLocale={doSetLocale}
          dataflows={dataflows}
          sidePanelIsVisible={sidePanelIsVisible}
          displayShowPanel={toggleSidePanel}
          searchData={searchData}
          search={doSearch}
          searchFields={config.searchFields}
          overlay
        />
      ) : (
        <Container
          langs={config.langs}
          currentLanguage={intl.locale}
          setLocale={doSetLocale}
          dataflows={dataflows}
          sidePanelIsVisible={sidePanelIsVisible}
          displayShowPanel={toggleSidePanel}
          searchData={searchData}
          search={doSearch}
          searchFields={config.searchFields}
          overlay={false}
        />
      )}
    </Media>
  </div>
);

App.propTypes = {
  intl: PropTypes.object,
  setLocale: PropTypes.func.isRequired,
  toggleSidePanel: PropTypes.func.isRequired,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchData: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  message: PropTypes.object,
  config: PropTypes.object,
  facets: PropTypes.array,
};

const actions = { search, setLocale };

const mapStateToProps = state => ({
  message: state.message,
  config: state.config,
  facets: getFacets(state),
  dataflows: state.dataflows,
  searchData: state.search,
  searchFields: state.searchFields,
  intl: state.intl,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('sidePanelIsVisible', 'showSidePanel', true),
  withHandlers({ toggleSidePanel: ({ showSidePanel }) => () => showSidePanel(sidePanelIsVisible => !sidePanelIsVisible) }),
);

export default enhance(App);
