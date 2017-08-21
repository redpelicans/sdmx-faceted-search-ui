import React from 'react';
import { compose, filter, map } from 'ramda';
import PropTypes from 'prop-types';
import CategoryFacet from './CategoryFacet';
import DimensionFacet from './DimensionFacet';

const CATEGORY = 'category';
const DIMENSION = 'dimension';

const getFacetComponent = onClick => ({ type, buckets, name, value }) => { //eslint-disable-line
  switch (type) {
    case CATEGORY:
      return <CategoryFacet key={name} name={name} value={value} domain={buckets} onClick={onClick} />;
    case DIMENSION:
      return <DimensionFacet key={name} name={name} value={value} buckets={buckets} />;
    default:
      return <div className="facetedbox" key={name} />;
  }
};

const Facets = ({ facets, selectFacet }) => {
  const facetBoxes = compose(filter(x => x), map(getFacetComponent(selectFacet)))(facets);
  return (
    <div>{facetBoxes}</div>
  );
};

Facets.propTypes = {
  facets: PropTypes.array.isRequired,
  selectFacet: PropTypes.func,
};

export default Facets;
