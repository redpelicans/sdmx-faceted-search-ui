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
  const body = { search: value, start };
  const message = { label: 'Cannot search dataflows' };
  requestJson({ dispatch, method: 'post', url: '/api/search', body, message })
   .then(data => dispatch(dataflowsLoaded(data)));
};
