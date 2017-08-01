import { GET_SEARCH_VALUE } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
