import { combineReducers } from 'redux';
import message from './message';
import dataflows from './dataflows';
import search from './search';
import facets from './facets';

const reducer = combineReducers({
  facets,
  search,
  message,
  dataflows,
});

export default reducer;
