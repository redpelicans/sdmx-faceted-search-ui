import React from 'react';
import PropTypes from 'prop-types';
import Items from '../Items';

import './FacetedBox.css';

const FacetedBox = ({ name, facets }) => (
  <div className="pt-card pt-elevation-0 facetedbox">
    <p className="facetedboxname">{name}</p>
    {facets.map(fa => (
      <Items
        name={fa}
      />
    ))}
  </div>
);

FacetedBox.propTypes = {
  name: PropTypes.string.isRequired,
  facets: PropTypes.array.isRequired,
};

export default FacetedBox;
