import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

import './side_panel_button.css';

const SidePanelButton = ({ isHidden, handleInput }) => (
  <div className="side-panel-button-container">
    <button
      id="overlay-button"
      className={isHidden === false ? 'pt-button pt-minimal pt-icon-cross' : 'pt-button pt-minimal pt-icon-list'}
      onClick={handleInput}
    />
  </div>
);

SidePanelButton.propTypes = {
  handleInput: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default withHandlers({
  handleInput: ({ setVisibility }) => event => {
    event.preventDefault();
    setVisibility();
  },
})(SidePanelButton);
