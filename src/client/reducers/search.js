import { SEARCH } from '../actions/dataflows';

const reducer = (state = { searchValue: '' }, action) => {
  switch (action.type) {
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
