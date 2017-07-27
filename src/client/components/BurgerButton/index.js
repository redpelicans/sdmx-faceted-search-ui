import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../connect';
import './BurgerButton.css';

const BurgerButton = ({ displayShowPanel }) => (
  <div className="burgerbutton" onClick={displayShowPanel}>
    <span className="pt-icon-large pt-icon-menu" />
  </div>
);

BurgerButton.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
};

export default connect(BurgerButton);
