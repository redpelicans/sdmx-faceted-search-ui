import { SEARCH, FILTER, FACETED_SEARCH, ADD_TO_CARD } from '../actions';

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
    case FACETED_SEARCH:
      return {
        ...state,
        facetedValue: action.value,
      };
    case ADD_TO_CARD:
      return {
        ...state,
        cardItems: state.cardItems.concat([action.id]),
      };
    default:
      return state;
  }
};

export default reducer;
