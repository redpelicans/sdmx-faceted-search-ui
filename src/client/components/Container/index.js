import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import Header from '../Header';
import MainPanel from '../MainPanel';
import './Container.css';

const Container = ({ showSidePanel, displayShowPanel }) => (
  <div className="container">
    <Header
      showSidePanel={showSidePanel}
      displayShowPanel={displayShowPanel}
    />
    <Media query={{ maxWidth: 599 }}>
      {matches => matches ? (
        <MainPanel
          size="100"
          displayShowPanel={displayShowPanel}
        />
            ) : (
              <MainPanel
                size="80"
                displayShowPanel={displayShowPanel}
              />
            )}
    </Media>

  </div>
);

Container.propTypes = {
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default Container;
