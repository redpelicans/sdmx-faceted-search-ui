import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import { reduce, toPairs } from 'ramda';
import BurgerButton from './BurgerButton';
import Facets from '../FacetedBox';

import './SidePanel.css';


const SidePanel = ({ facets, sidePanelIsVisible, moveSidePanel, overlay }) => {
  // const random = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
  // const getId = ({ buckets }) => buckets[random(0, buckets.length - 1)].val;
  const getFacets = reduce((acc, [name, facet]) => [...acc, { ...facet, name }], [], toPairs(facets));
  return (
    <Motion style={{ x: spring(sidePanelIsVisible ? -390 : 0), y: spring(sidePanelIsVisible ? 450 : 450) }}>
      {({ x, y }) =>
        (<div
          style={{
            marginLeft: `${x}px`,
            minWidth: `${y}px`,
            position: overlay ? 'absolute' : 'relative',
          }}
          className="sidepanel"
        >
          {sidePanelIsVisible && <BurgerButton
            displayShowPanel={moveSidePanel}
          />}
          {!sidePanelIsVisible && <div onClick={moveSidePanel} className="crosscontainer">
            <span className="pt-icon-large pt-icon-cross" />
          </div>}
          <Facets facets={getFacets} />
        </div>)
    }
    </Motion>
  );
};

SidePanel.propTypes = {
  facets: PropTypes.object,
  sidePanelIsVisible: PropTypes.bool.isRequired,
  moveSidePanel: PropTypes.func.isRequired,
  overlay: PropTypes.bool.isRequired,
};

export default SidePanel;
