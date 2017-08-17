import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';
export const SEARCH = 'SEARCH';

const dataflowsLoaded = ({ dataflows = [], numFound, start } = {}) => ({
  type: DATAFLOWSLOADED,
  dataflows,
  numFound,
  start,
});

export const search = (value, start) => dispatch => {
  dispatch({ type: SEARCH, value });
  requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value, start, count: 15 }, message: 'Cannot search dataflows' })
   .then(data => dispatch(dataflowsLoaded(data)));
};
