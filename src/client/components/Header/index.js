import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import LanguageSelector from '../LanguageSelector';

import './Header.css';


const Header = ({ title, language }) => (
  <nav className="pt-navbar pt-intent-success">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">{ title }</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <span className="pt-icon-large pt-icon-shopping-cart pt-intent-primary" />
      <div className="pt-navbar-divider" />
      <LanguageSelector
        language={language}
      />
    </div>
  </nav>
=======

import './header.css';
import SidePanelButton from '../SidePanelButton';
import Title from '../Title';
import LanguageSelector from '../LanguageSelector';

const Header = ({ title, langs, showOverlayPanel, isHidden }) => (
  <div>
    <nav className="pt-navbar pt-dark">
      <span className="pt-navbar-group pt-align-left">
        <SidePanelButton isHidden={isHidden} showOverlayPanel={showOverlayPanel} />
      </span>
      <span className="pt-navbar-group">
        <Title title={title} />
      </span>
      <span className="pt-navbar-group pt-align-right">
        <LanguageSelector langs={langs} />
      </span>
    </nav>
  </div>
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
<<<<<<< HEAD
  language: PropTypes.array.isRequired,
=======
  langs: PropTypes.array.isRequired,
  showOverlayPanel: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
};

export default Header;
