import { SEARCH, NUMBERRESULTSLOADED, SELECTEDPAGE } from '../actions/dataflows';

const reducer = (state = { searchValue: '', numberOfResult: 0, page: 1 }, action) => {
  switch (action.type) {
    case SELECTEDPAGE:
      return {
        ...state,
        page: action.page,
      };
    case NUMBERRESULTSLOADED:
      return {
        ...state,
        numberOfResult: action.numberOfResult,
      };
    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
