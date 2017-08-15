import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import message from './message';
import dataflows from './dataflows';
import lang from './lang';

const reducer = combineReducers({
  message,
  dataflows,
  toastr: toastrReducer,
  lang,
});

export default reducer;
