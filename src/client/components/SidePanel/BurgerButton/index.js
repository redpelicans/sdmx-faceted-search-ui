import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import './BurgerButton.css';

const BurgerButton = ({ displayShowPanel }) => (
  <div
    className="burger_button_container"
    onClick={(e) => {
      e.preventDefault();
      displayShowPanel();
    }}
  >
    <span className="pt-icon-large pt-icon-menu" />
  </div>
);

BurgerButton.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['displayShowPanel'])(BurgerButton);
