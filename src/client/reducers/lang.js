import { CHANGELANG } from '../actions/lang';

const reducer = (state = { language: navigator.language }, action) => {
  switch (action.type) {
    case CHANGELANG:
      return {
        ...state,
        language: action.lang,
      };
    default:
      return state;
  }
};

export default reducer;
