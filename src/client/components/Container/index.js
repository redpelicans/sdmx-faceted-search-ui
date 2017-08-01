import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ title, list, language, showSidePanel, displayShowPanel }) => (
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
          list={list}
          displayShowPanel={displayShowPanel}
        />
            ) : (
              <MainPanel
                size="80"
                list={list}
                displayShowPanel={displayShowPanel}
              />
            )}
    </Media>

  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  language: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default Container;
