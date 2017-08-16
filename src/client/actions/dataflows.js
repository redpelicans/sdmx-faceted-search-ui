import { propOr } from 'ramda';
import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';
export const SEARCH = 'SEARCH';

const dataflowsLoaded = dataflows => ({
  type: DATAFLOWSLOADED,
  dataflows,
});

export const search = value => dispatch => {
  requestJson({
    dispatch,
    method: 'post',
    url: '/api/search',
    body: { search: value },
    header: 'Runtime error',
    message: 'Cannot search dataflows',
    status: 'DANGER',
  })
    .then(data => dispatch(dataflowsLoaded(propOr([], 'dataflows', data))));
};
