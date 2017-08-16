import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import BurgerButton from './BurgerButton';

import './SidePanel.css';


const SidePanel = ({ sidePanelIsVisible, moveSidePanel }) => (
  <Motion style={{ x: spring(sidePanelIsVisible ? -240 : 0), y: spring(sidePanelIsVisible ? 300 : 250) }}>
    {({ x, y }) =>
      (<div
        style={{
          marginLeft: `${x}px`,
          minWidth: `${y}px`,
        }}
        className="sidepanel"
      >
        {sidePanelIsVisible && <BurgerButton
          displayShowPanel={moveSidePanel}
        />}
        {!sidePanelIsVisible && <div onClick={moveSidePanel} className="crosscontainer">
          <span className="pt-icon-large pt-icon-cross" />
        </div>}
      </div>)
  }
  </Motion>
);

SidePanel.propTypes = {
  sidePanelIsVisible: PropTypes.bool.isRequired,
  moveSidePanel: PropTypes.func.isRequired,
};

export default SidePanel;
