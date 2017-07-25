import React from 'react';
import FacetedBox from '../FacetedBox';

import './SidePanel.css';

const SidePanel = () => (
  <div className="side">
    <i className="fa fa-bars menuicone" aria-hidden="true" />
    <FacetedBox
      name="Categories"
    />
    <FacetedBox
      name="Area"
    />
    <FacetedBox
      name="Colors"
    />
  </div>
);

export default SidePanel;
