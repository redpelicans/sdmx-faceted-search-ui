import { DATAFLOWSLOADED } from '../actions/dataflows';

const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case DATAFLOWSLOADED:
      return {
        ...state,
        data: action.dataflows,
      };
    default:
      return state;
  }
};

export default reducer;
