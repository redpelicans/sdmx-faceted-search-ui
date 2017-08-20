import React from 'react';
import PropTypes from 'prop-types';

const DimensionFacet = ({ name }) => (
  <div className="facetedbox">
    <p className="facetedboxname">{name}</p>
  </div>
);

DimensionFacet.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DimensionFacet;
