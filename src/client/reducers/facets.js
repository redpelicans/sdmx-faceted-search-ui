import { omit, mergeDeepLeft } from 'ramda';
import { CONFIGLOADED } from '../actions/config';
import { DATAFLOWSLOADED } from '../actions/dataflows';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIGLOADED:
      return action.facets;
    case DATAFLOWSLOADED:
      return omit(['count'], mergeDeepLeft(action.facets, state));
    default:
      return state;
  }
};

export default reducer;
