import { SETLANG, CONFIGLOADED } from '../actions/config';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SETLANG:
      return {
        ...state,
        currentLang: action.lang,
      };
    case CONFIGLOADED:
      return {
        ...state,
        langs: action.langs,
        defaultLang: action.defaultLang,
      };
    default:
      return state;
  }
};

export default reducer;

