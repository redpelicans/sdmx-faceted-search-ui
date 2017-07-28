import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import connect from '../../connect';
import './BurgerButton.css';

const BurgerButton = ({ showSidePanel, displayShowPanel }) => (
  <Motion style={{ x: spring(showSidePanel ? 0 : -50) }}>
    {({ x }) =>
    (<div
      style={{
        marginLeft: `${x}px`,
      }}
      className="burgerbutton"
      onClick={displayShowPanel}
    >
      <span className="pt-icon-large pt-icon-menu" />
    </div>)}
  </Motion>
);

BurgerButton.propTypes = {
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default connect(BurgerButton);
