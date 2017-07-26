import React from 'react';
import PropTypes from 'prop-types';

import './HeaderLeft.css';

const HeaderLeft = ({ children }) => (
  <div className="headerleft">
    {children}
  </div>
);

HeaderLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderLeft;
