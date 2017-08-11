import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';

const dataflowsLoaded = dataflows => ({
  type: DATAFLOWSLOADED,
  dataflows,
});

export const search = value => dispatch => {
  requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value } })
    .then(data => dispatch(dataflowsLoaded(data.dataflows)));
};

