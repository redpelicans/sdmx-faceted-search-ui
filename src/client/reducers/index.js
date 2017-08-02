import { SEARCH, FILTER, FACETEDSEARCH } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
      };
    case FILTER:
      return {
        ...state,
        filterValue: action.value,
      };
    case FACETEDSEARCH:
      return {
        ...state,
        facetedValue: action.value,
      };
    default:
      return (state);
  }
};

export default reducer;
