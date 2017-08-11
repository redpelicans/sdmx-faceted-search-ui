import { ALERT } from '../actions/message';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ALERT:
      return {
        label: action.label,
        status: action.status,
      };
    default:
      return (state);
  }
};

export default reducer;
