import React from 'react';
// import PropTypes from 'prop-types';

import './side_panel_button.css';

const SidePanelButton = () => (
  <button onClick={e => {
    e.preventDefault();
  }}
  >
    <i />
  </button>
);

// SidePanelButton.propTypes = {
//   sidePanelState: PropTypes.string.isRequired,
//   changeSidePanelState: PropTypes.func.isRequired,
// };

export default SidePanelButton;
