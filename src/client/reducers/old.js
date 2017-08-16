import { combineReducers } from 'redux';
import alert from './alert'; //eslint-disable-line
import search from './search'; //eslint-disable-line

const reducer = combineReducers({
  alert,
  search,
});

export default reducer;
