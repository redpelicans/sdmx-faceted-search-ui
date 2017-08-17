import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import BurgerButton from './BurgerButton';
import FacetedBox from '../FacetedBox';

import './SidePanel.css';


const SidePanel = ({ facets, sidePanelIsVisible, moveSidePanel }) => (
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
        {Object.entries(facets).map(facet => (
          <FacetedBox key={facet} facet={facet} />
        ))}
      </div>)
  }
  </Motion>
);

SidePanel.propTypes = {
  facets: PropTypes.object,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  moveSidePanel: PropTypes.func.isRequired,
};

export default SidePanel;
