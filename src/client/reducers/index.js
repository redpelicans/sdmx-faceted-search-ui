import { SEARCH, SET_VISIBILITY } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
      };
    case SET_VISIBILITY:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    default:
      return state;
  }
};

export default reducer;
