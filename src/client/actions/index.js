export const SEARCH = 'SEARCH';
export const FILTER = 'FILTER';
export const FACETED_SEARCH = 'FACETED_SEARCH';
export const ADD_TO_CARD = 'ADD_TO_CARD';

export const search = value => ({ type: SEARCH, value });
export const filter = value => ({ type: FILTER, value });
export const facetedSearch = value => ({ type: FACETED_SEARCH, value });
export const addToCard = id => ({ type: ADD_TO_CARD, id });
