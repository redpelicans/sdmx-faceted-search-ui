import { combineReducers } from 'redux';
import alert from './alert';
import search from './search';

const reducer = combineReducers({
  alert,
  search,
});

export default reducer;
