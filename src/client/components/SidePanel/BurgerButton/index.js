import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip2 } from '@blueprintjs/labs';
import { onlyUpdateForKeys } from 'recompose';
import './BurgerButton.css';

const BurgerButton = ({ displayShowPanel }) => (
  <div className="burger_button_container">
    <Tooltip2 content="Click to navigate on facets">
      <div
        onClick={(e) => {
          e.preventDefault();
          displayShowPanel();
        }}
      >
        <span className="pt-icon-large pt-icon-menu" />
      </div>
    </Tooltip2>
  </div>
);

BurgerButton.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['displayShowPanel'])(BurgerButton);
