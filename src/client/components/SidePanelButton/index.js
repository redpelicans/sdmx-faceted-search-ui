import React from 'react';
// import PropTypes from 'prop-types';

import './side_panel_button.css';

const SidePanelButton = () => (
  <i onClikc={e => {
    e.preventDefault();
  }}
  />
);

// SidePanelButton.propTypes = {
//   sidePanelState: PropTypes.string.isRequired,
//   changeSidePanelState: PropTypes.func.isRequired,
// };

export default SidePanelButton;
