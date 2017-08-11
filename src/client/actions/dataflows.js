import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';
export const RESETDATAFLOW = 'RESETDATAFLOW';
export const SEARCH = 'SEARCH';

const doSearch = value => ({
  type: SEARCH,
  value,
});

const dataflowsLoaded = dataflows => ({
  type: DATAFLOWSLOADED,
  dataflows,
});

export const search = value => dispatch => {
  dispatch(doSearch(value));
  if (!value) {
    return dispatch({ type: RESETDATAFLOW });
  }
  requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value } })
    .then(data => dispatch(dataflowsLoaded(data.dataflows)));
};

