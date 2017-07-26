import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';


const Header = ({ children }) => {
  const headerLeft = () => (
    React.Children.toArray(children).find(child => child.type === HeaderLeft)
  );

  const headerRight = () => (
    React.Children.toArray(children).find(child => child.type === HeaderRight)
  );

  return (
    <div className="header-container">
      {headerLeft()}
      {headerRight()}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
