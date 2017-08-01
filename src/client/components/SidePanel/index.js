import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import FacetedBox from '../FacetedBox';
import FilterBox from '../FilterBox';

import './SidePanel.css';


const SidePanel = ({ facetedbox, filterbox, showSidePanel, displayShowPanel, behavior }) => (
  <Motion style={{ x: spring(showSidePanel ? -240 : 0) }}>
    {({ x }) =>
      (<div
        style={{
          marginLeft: `${x}px`,
          position: behavior,
        }}
        className="sidepanel"
      >
        <div onClick={displayShowPanel} className="crosscontainer">
          <span className="pt-icon-large pt-icon-cross" />
        </div>
        {facetedbox.map(facetedelem => (
          <FacetedBox
            key={facetedelem.id}
            name={facetedelem.name}
            facets={facetedelem.facets}
          />
    ))}
        {filterbox.map(filterelem => (
          <FilterBox
            key={filterelem.id}
            name={filterelem.name}
            filters={filterelem.filtres}
          />
    ))}
      </div>)
  }
  </Motion>
);

SidePanel.propTypes = {
  facetedbox: PropTypes.array.isRequired,
  filterbox: PropTypes.array.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  behavior: PropTypes.string.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default SidePanel;
