import { combineReducers } from 'redux';
import alert from './message';
import search from './search';

const reducer = combineReducers({
  alert,
  search,
});

export default reducer;
