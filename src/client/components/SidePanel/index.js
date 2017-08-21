import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import BurgerButton from './BurgerButton';
import Facets from '../FacetedBox';

import './SidePanel.css';


const SidePanel = ({ facets, sidePanelIsVisible, moveSidePanel, overlay }) => (
  <Motion style={{ x: spring(sidePanelIsVisible ? -590 : 0), y: spring(sidePanelIsVisible ? 650 : 450) }}>
    {({ x, y }) =>
      (<div
        style={{
          marginLeft: `${x}px`,
          minWidth: `${y}px`,
          position: overlay ? 'absolute' : 'relative',
          zIndex: overlay ? 3 : 1,
        }}
        className="sidepanel"
      >
        <div className="sidepanel_inner">
          {sidePanelIsVisible && <BurgerButton
            displayShowPanel={moveSidePanel}
          />}
          {!sidePanelIsVisible && <div onClick={moveSidePanel} className="crosscontainer">
            <span className="pt-icon-large pt-icon-cross" />
          </div>}
          <Facets facets={facets} />
        </div>
      </div>)
    }
  </Motion>
);

SidePanel.propTypes = {
  facets: PropTypes.object,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  moveSidePanel: PropTypes.func.isRequired,
  overlay: PropTypes.bool.isRequired,
};

export default SidePanel;
