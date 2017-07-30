import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../connect';
import './BurgerButton.css';

const BurgerButton = ({ displayShowPanel }) => (
  <button type="button" onClick={displayShowPanel} className="pt-button pt-intent-primary pt-icon-menu burgerbutton">Affiner</button>
);

BurgerButton.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
};

export default connect(BurgerButton);
