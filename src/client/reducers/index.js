import { combineReducers } from 'redux';
import message from './message';
import dataflows from './dataflows';
import config from './config';
import search from './search';
import facets from './facets';
import intl from './intl';

const reducer = combineReducers({
  message,
  dataflows,
  config,
  intl,
  search,
  facets,
});

export default reducer;
