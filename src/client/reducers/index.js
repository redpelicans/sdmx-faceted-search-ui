import { GET_SEARCH_BAR_INPUT } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_SEARCH_BAR_INPUT:
      return {
        ...state,
        searchValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
