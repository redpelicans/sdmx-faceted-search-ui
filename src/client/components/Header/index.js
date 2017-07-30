import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../connect';
import LanguageSelector from '../LanguageSelector';

import './Header.css';


const Header = ({ title }) => (
  <nav className="pt-navbar pt-intent-success">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">{ title }</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <span className="pt-icon-large pt-icon-shopping-cart pt-intent-primary" />
      <div className="pt-navbar-divider" />
      <LanguageSelector />
    </div>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(Header);
