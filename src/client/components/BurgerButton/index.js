import React from 'react';
import PropTypes from 'prop-types';

import './BurgerButton.css';

const BurgerButton = ({ displayShowPanel, showSidePanel }) => (
  <div className={showSidePanel ? 'burgerbutton' : 'burgerbuttonhidden'}>
    <i
      onClick={displayShowPanel}
      className="fa fa-bars menuicone"
      aria-hidden="true"
    />
  </div>
);

BurgerButton.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
};

export default BurgerButton;
