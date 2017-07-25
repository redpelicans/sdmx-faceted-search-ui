import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import LanguageSelector from '../LanguageSelector';
import './Header.css';

const Header = ({ displayShowPanel, showSidePanel }) => (
  <div className="header">
    <i
      onClick={displayShowPanel}
      className={showSidePanel ? 'fa fa-bars menuicone'
        : 'fa fa-bars menuiconehidden'}
      aria-hidden="true"
    />
    <Title
      name="SDMX"
    />
    <LanguageSelector
      language="Fr"
    />
  </div>
);

Header.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
};

export default Header;
