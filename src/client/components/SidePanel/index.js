import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import BurgerButton from './BurgerButton';
import Facets from '../FacetedBox';

import './SidePanel.css';


const SidePanel = ({ facets, sidePanelIsVisible, moveSidePanel, overlay, search }) => (
  <Motion style={{ x: spring(sidePanelIsVisible ? -590 : 0), y: spring(sidePanelIsVisible ? 650 : 450) }}>
    {({ x, y }) =>
      (<div
        style={{
          marginLeft: `${x}px`,
          minWidth: `${y}px`,
          position: overlay ? 'absolute' : 'relative',
          zIndex: overlay ? 4 : 1,
          height: overlay ? '100%' : '',
          minHeight: overlay ? '100vh' : '',
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
          <Facets facets={facets} search={search} />
        </div>
      </div>)
    }
  </Motion>
);

SidePanel.propTypes = {
  facets: PropTypes.array,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  moveSidePanel: PropTypes.func.isRequired,
  overlay: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired,
};

export default SidePanel;
