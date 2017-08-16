import { combineReducers } from 'redux';
import message from './message';
import dataflows from './dataflows';
import config from './config';

const reducer = combineReducers({
  message,
  dataflows,
  config,
});

export default reducer;
