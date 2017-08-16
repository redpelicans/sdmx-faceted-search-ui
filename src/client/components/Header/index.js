import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { title } from '../../../params';
import './Header.css';


const Header = () => (
  <nav className="pt-navbar pt-intent-success header">
    <div className="pt-navbar-group pt-align-left">
      <div className="logo">
        <i className="fa fa-paper-plane" aria-hidden="true" />
      </div>
      <div className="pt-navbar-heading">{ title }</div>
    </div>
    <div className="pt-navbar-group pt-align-right" />
  </nav>
);

export default onlyUpdateForKeys(['language'])(Header);
