import { propOr } from 'ramda';
import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';

const dataflowsLoaded = dataflows => ({
  type: DATAFLOWSLOADED,
  dataflows,
});

export const search = value => dispatch => {
  requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value }, message: 'Cannot search dataflows', status: 'DANGER' })
    .then(data => dispatch(dataflowsLoaded(propOr([], 'dataflows', data))));
};

