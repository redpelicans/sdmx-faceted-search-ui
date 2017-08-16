import { combineReducers } from 'redux';
import message from './message';
import dataflows from './dataflows';
import lang from './lang';
import search from './search';
import facets from './facets';

const reducer = combineReducers({
  message,
  dataflows,
  lang,
  search,
  facets,
});

export default reducer;
