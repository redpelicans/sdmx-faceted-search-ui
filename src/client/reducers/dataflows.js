import { DATAFLOWSLOADED, RESETDATAFLOW } from '../actions/dataflows';

const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case DATAFLOWSLOADED:
      return {
        ...state,
        data: action.dataflows,
      };
    case RESETDATAFLOW:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
