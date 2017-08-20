import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import Facets from './FacetsPanel';

import './FacetedBox.css';

const FacetedBox = ({ facet }) => (
  <div className="pt-card pt-elevation-0 facetedbox">
    <p className="facetedboxname">{facet.type}</p>
    <Facets />
  </div>
);

FacetedBox.propTypes = {
  facet: PropTypes.object.isRequired,
};

export default onlyUpdateForKeys(['name'])(FacetedBox);
