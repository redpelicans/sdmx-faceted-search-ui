import React from 'react';
import PropTypes from 'prop-types';
import FacetedBox from '../FacetedBox';

import './SidePanel.css';


const SidePanel = ({ showSidePanel, displayShowPanel }) => (
  <div className={`side${showSidePanel}`}>
    <i onClick={displayShowPanel} className="fa fa-times cross" aria-hidden="true" />
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

SidePanel.propTypes = {
  showSidePanel: PropTypes.string.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default SidePanel;
