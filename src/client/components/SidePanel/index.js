import React from 'react';
import PropTypes from 'prop-types';
import FacetedBox from '../FacetedBox';
import FilterBox from '../FilterBox';
import connect from '../../connect';

import './SidePanel.css';


const SidePanel = ({ facetedbox, filterbox, showSidePanel, displayShowPanel, visibility, behavior }) => (
  <div className={`${visibility} ${behavior} ${showSidePanel ? 'wrap' : 'unwrap'}`}>
    <div onClick={displayShowPanel} className="crosscontainer">
      <span className="pt-icon-large pt-icon-cross" />
    </div>
    {facetedbox.map(facetedelem => (
      <FacetedBox
        name={facetedelem.name}
        facets={facetedelem.facets}
      />
    ))}
    {filterbox.map(filterelem => (
      <FilterBox
        name={filterelem.name}
        filters={filterelem.filtres}
      />
    ))}
  </div>
);

SidePanel.propTypes = {
  facetedbox: PropTypes.object.isRequired,
  filterbox: PropTypes.object.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  visibility: PropTypes.string.isRequired,
  behavior: PropTypes.string.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default connect(SidePanel);
