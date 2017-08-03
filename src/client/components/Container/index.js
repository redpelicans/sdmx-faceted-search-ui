import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import Media from 'react-media';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ title, dataflows, language, showSidePanel, displayShowPanel, Search, searchValue }) => (
  <div className="container">
    <Header
      title={title}
      language={language}
      showSidePanel={showSidePanel}
      displayShowPanel={displayShowPanel}
    />
    <Media query={{ maxWidth: 599 }}>
      {matches => matches ? (
        <MainPanel
          size="100"
          dataflows={dataflows}
          displayShowPanel={displayShowPanel}
          Search={Search}
          searchValue={searchValue}
        />
            ) : (
              <MainPanel
                size="80"
                dataflows={dataflows}
                displayShowPanel={displayShowPanel}
                Search={Search}
                searchValue={searchValue}
              />
            )}
    </Media>

=======

import './container.css';
import Header from '../Header';
import MainPanel from '../MainPanel';

const Container = ({ title, langs, resultItems, showOverlayPanel, isHidden }) => (
  <div className="container-container">
    <Header title={title} langs={langs} showOverlayPanel={showOverlayPanel} isHidden={isHidden} />
    <MainPanel resultItems={resultItems} />
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
<<<<<<< HEAD
  dataflows: PropTypes.array.isRequired,
  language: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
  Search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
=======
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
  showOverlayPanel: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
};

export default Container;
