import { reduce, toPairs, omit } from 'ramda';
import { CONFIGLOADED } from '../actions/config';
import { DATAFLOWSLOADED, SEARCH } from '../actions/dataflows';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIGLOADED:
      return action.facets;
    case SEARCH:
      if (action.facets) {
        return reduce((acc, [name, values]) => ({ ...acc, [name]: { ...state[name], values } }), state, toPairs(action.facets));
      }
      return state;
    case DATAFLOWSLOADED:
      return reduce((acc, [name, v]) => ({ ...acc, [name]: { ...state[name], buckets: v.buckets } }), state, toPairs(omit(['count'], action.facets)));
    default:
      return state;
  }
};

export default reducer;
