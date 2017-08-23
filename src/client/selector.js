import { reduce, sortBy, toPairs } from 'ramda';
import { createSelector } from 'reselect';
import { DIMENSION } from './dataflows';

const getStateFacets = state => state.facets;

const sortFacetsByKey = ({ type, buckets }, key) => {
  if (type !== key) return buckets;
  return sortBy(bucket => bucket.val, buckets);
};

export const getFacets = createSelector(
  [getStateFacets],
  facets => reduce((acc, [name, facet]) => [...acc, { ...facet, buckets: sortFacetsByKey(facet, DIMENSION), name }], [], toPairs(facets)),
);

