import React from 'react';
import { compose, filter, map } from 'ramda';
import PropTypes from 'prop-types';
import CategoryFacet from './CategoryFacet';

const CATEGORY = 'category';

const getFacetComponent = onClick => ({ type, buckets, name, value }) => { //eslint-disable-line
  switch (type) {
    case CATEGORY:
      return <CategoryFacet key={name} name={name} value={value} domain={buckets} onClick={onClick} />;
    default:
  }
};

const Facets = ({ facets, selectFacet }) => {
  const facetBoxes = compose(filter(x => x), map(getFacetComponent(selectFacet)))(facets);
  return (
    <div>
      { facetBoxes }
    </div>
  );
};

Facets.propTypes = {
  facets: PropTypes.array.isRequired,
  selectFacet: PropTypes.func,
};

getFacetComponent.propTypes = {
  type: PropTypes.string.isRequired,
  buckets: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Facets;
