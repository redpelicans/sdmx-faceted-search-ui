import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import { title } from '../../../params';
import LanguageSelector from '../LanguageSelector';

import './Header.css';

const Header = ({ langs, setLocale, currentLanguage }) => (
  <nav className="pt-navbar pt-intent-success header">
    <div className="pt-navbar-group pt-align-left">
      <div className="logo">
        <i className="fa fa-paper-plane" aria-hidden="true" />
      </div>
      <div className="pt-navbar-heading">{ title }</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <LanguageSelector langs={langs} currentLanguage={currentLanguage} setLocale={setLocale} />
    </div>
  </nav>
);

Header.propTypes = {
  langs: PropTypes.array,
  setLocale: PropTypes.func,
  currentLanguage: PropTypes.string,
};

export default pure(Header);
