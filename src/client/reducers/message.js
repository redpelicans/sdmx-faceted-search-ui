import { ALERT } from '../actions/message';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ALERT:
      return {
        id: (state.id || 0) + 1,
        header: action.header,
        label: action.label,
        status: action.status,
        iconName: action.status === 'DANGER' ?
          'pt-icon-warning-sign' :
          'pt-icon-tick',
      };
    default:
      return (state);
  }
};

export default reducer;
