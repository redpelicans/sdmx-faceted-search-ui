import React from 'react';

import './side_panel_button.css';

const SidePanelButton = () => (
  <button
    onClick={e => {
      e.preventDefault();
    }}
  >
    <i />
  </button>
);

export default SidePanelButton;
