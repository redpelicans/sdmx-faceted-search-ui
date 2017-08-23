import React from 'react';
import { compose, filter, map } from 'ramda';
import PropTypes from 'prop-types';
import CategoryFacet from './CategoryFacet';
import DimensionFacet from './DimensionFacet';
import { CATEGORY, DIMENSION } from '../../dataflows';

const getFacetComponent = search => ({ type, buckets, name, value }) => { // eslint-disable-line
  const handleClick = facetName => facetValue => search({ facets: { [facetName]: facetValue } });
  switch (type) {
    case CATEGORY:
      return <CategoryFacet key={name} name={name} value={value} domain={buckets} onClick={handleClick(name)} />;
    case DIMENSION:
      return <DimensionFacet key={name} name={name} value={value} buckets={buckets} onClick={handleClick(name)} />;
    default:
      return <div className="facetedbox" key={name} />;
  }
};

const Facets = ({ facets, search }) => {
  const facetBoxes = compose(filter(x => x), map(getFacetComponent(search)))(facets);
  return (
    <div>{facetBoxes}</div>
  );
};

Facets.propTypes = {
  facets: PropTypes.array.isRequired,
  search: PropTypes.func,
};

export default Facets;
