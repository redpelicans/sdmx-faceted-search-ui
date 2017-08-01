export const SEARCH = 'SEARCH';
export const FILTER = 'FILTER';
export const FACETEDSEARCH = 'FACETEDSEARCH';
export const Search = value => ({ type: SEARCH, value });
export const Filter = value => ({ type: FILTER, value });
export const FacetedSearch = value => ({ type: FACETEDSEARCH, value });
