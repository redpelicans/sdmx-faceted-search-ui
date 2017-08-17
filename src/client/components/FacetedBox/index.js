import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

import './FacetedBox.css';

const FacetedBox = ({ facet }) => (
  <div className="pt-card pt-elevation-0 facetedbox">
    <p className="facetedboxname">{typeof (facet)}</p>
  </div>
);

FacetedBox.propTypes = {
  facet: PropTypes.array.isRequired,
};

export default onlyUpdateForKeys(['name'])(FacetedBox);
