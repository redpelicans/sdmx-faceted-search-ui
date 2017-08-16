import { SETLANG } from '../actions/config';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SETLANG:
      return {
        ...state,
        language: action.lang,
      };
    default:
      return state;
  }
};

export default reducer;
