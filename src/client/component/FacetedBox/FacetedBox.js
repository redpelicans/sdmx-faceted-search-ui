import React from 'react';
import PropTypes from 'prop-types';
import Items from '../Items';

import './FacetedBox.css';

const FacetedBox = ({ name }) => (
  <div className="facetedbox">
    <p className="facetedboxname">{name}</p>
    <Items
      name="item 1"
    />
    <Items
      name="item 2"
    />
    <Items
      name="item 3"
    />
  </div>
);

FacetedBox.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FacetedBox;
