import React from 'react';
import PropTypes from 'prop-types';

import './HeaderRight.css';

const HeaderRight = ({ children }) => (
  <div className="headerright">
    {children}
  </div>
);

HeaderRight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderRight;
