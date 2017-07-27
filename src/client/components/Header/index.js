import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../connect';
import LanguageSelector from '../LanguageSelector';
import BurgerButton from '../BurgerButton';

import './Header.css';


const Header = ({ title, displayShowPanel }) => (
  <nav className="pt-navbar pt-dark">
    <div className="pt-navbar-group pt-align-left">
      <BurgerButton
        displayShowPanel={displayShowPanel}
      />
      <div className="pt-navbar-heading">{ title }</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <div className="pt-navbar-divider" />
      <LanguageSelector />
    </div>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default connect(Header);
