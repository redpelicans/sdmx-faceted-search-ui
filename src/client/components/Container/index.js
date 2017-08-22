import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ dataflows, currentLanguage, searchData, sidePanelIsVisible, displayShowPanel, search, langs, setLocale, overlay }) => (
  <div className={overlay ? 'container overlay' : 'container'}>
    <Header
      langs={langs}
      setLocale={setLocale}
      currentLanguage={currentLanguage}
      sidePanelIsVisible={sidePanelIsVisible}
      displayShowPanel={displayShowPanel}
    />
    <MainPanel
      dataflows={dataflows}
      displayShowPanel={displayShowPanel}
      searchData={searchData}
      search={search}
    />
  </div>
);

Container.propTypes = {
  langs: PropTypes.array,
  setLocale: PropTypes.func,
  currentLanguage: PropTypes.string,
  dataflows: PropTypes.array.isRequired,
  sidePanelIsVisible: PropTypes.bool,
  displayShowPanel: PropTypes.func.isRequired,
  searchData: PropTypes.object,
  search: PropTypes.func.isRequired,
  overlay: PropTypes.bool,
};

Container.defaultProps = {
  overlay: false,
  facets: {},
};

export default Container;
