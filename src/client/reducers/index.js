import { combineReducers } from 'redux';
import message from './message';
import dataflows from './dataflows';
import config from './config';
import search from './search';
import facets from './facets';

const reducer = combineReducers({
  message,
  dataflows,
  config,
  search,
  facets,
});

export default reducer;
