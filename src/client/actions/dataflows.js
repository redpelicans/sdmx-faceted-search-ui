import { propOr } from 'ramda';
import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';
export const SEARCH = 'SEARCH';

const dataflowsLoaded = dataflows => ({
  type: DATAFLOWSLOADED,
  dataflows,
});

export const search = value => dispatch => {
  if (!value) {
    requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value } })
    .then(() => dispatch(dataflowsLoaded([])));
  } else {
    requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value } })
      .then(data => dispatch(dataflowsLoaded(propOr([], 'dataflows', data))));
  }
};

