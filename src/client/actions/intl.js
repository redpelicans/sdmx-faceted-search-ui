import { search } from './dataflows';

export const SETLOCALE = 'SETLOCALE';

export const setLocale = locale => dispatch => {
  dispatch({ type: SETLOCALE, locale });
  dispatch(search());
};
