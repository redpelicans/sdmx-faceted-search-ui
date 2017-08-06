import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ title, sortTypes, dataflows, language, showSidePanel, displayShowPanel, search, searchValue, marques, sortByMark }) => (
  <div className="container">
    <Header
      title={title}
      language={language}
      showSidePanel={showSidePanel}
      displayShowPanel={displayShowPanel}
    />
    <MainPanel
      dataflows={dataflows}
      marques={marques}
      displayShowPanel={displayShowPanel}
      search={search}
      searchValue={searchValue}
      sortByMark={sortByMark}
      sortTypes={sortTypes}
    />
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  dataflows: PropTypes.array.isRequired,
  language: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  marques: PropTypes.array.isRequired,
  sortByMark: PropTypes.func.isRequired,
  sortTypes: PropTypes.array.isRequired,
};

export default Container;
