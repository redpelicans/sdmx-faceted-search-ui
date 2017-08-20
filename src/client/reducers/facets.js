import { CONFIGLOADED } from '../actions/config';
import { SEARCH, DATAFLOWSLOADED } from '../actions/dataflows';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIGLOADED:
      return action.facets;
    case DATAFLOWSLOADED:
      return action.facets;
    case SEARCH:
      if (action.facets) {
        return action.facets;
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
