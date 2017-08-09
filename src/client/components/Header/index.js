import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import LanguageSelector from '../LanguageSelector';
import './Header.css';


const Header = ({ title, language }) => (
  <nav className="pt-navbar pt-intent-success header">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">{ title }</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <div className="pt-navbar-divider" />
      <LanguageSelector
        language={language}
      />
    </div>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  language: PropTypes.array.isRequired,
};

export default onlyUpdateForKeys(['language'])(Header);
