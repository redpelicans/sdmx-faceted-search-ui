import React from 'react';
import PropTypes from 'prop-types';
import Items from '../Items';

import './FacetedBox.css';

const FacetedBox = ({ name }) => (
  <div className="facetedbox">
    <p className="facetedboxname">{name}</p>
    <Items
      name="Tout"
    />
    <Items
      name="Sports, vacances"
    />
    <Items
      name="Autres"
    />
    <Items
      name="Camping, randonnée"
    />
  </div>
);

FacetedBox.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FacetedBox;
