import { combineReducers } from 'redux';
import message from './message';
import dataflows from './dataflows';
import lang from './lang';

const reducer = combineReducers({
  message,
  dataflows,
  lang,
});

export default reducer;
