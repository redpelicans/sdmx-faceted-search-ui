import { SEARCH, DATAFLOWSLOADED } from '../actions/dataflows';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case DATAFLOWSLOADED:
      return {
        ...state,
        start: action.start,
        numFound: action.numFound,
      };
    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
        count: action.COUNT,
      };
    default:
      return state;
  }
};

export default reducer;
