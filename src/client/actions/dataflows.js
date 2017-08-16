import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';
export const SEARCH = 'SEARCH';

const COUNT = 10;

const dataflowsLoaded = ({ dataflows, numFound, start }) => ({
  type: DATAFLOWSLOADED,
  dataflows,
  numFound,
  start,
});

export const search = (value, start) => dispatch => {
  dispatch({ type: SEARCH, value, COUNT });
  requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value, start, COUNT } })
   .then(data => dispatch(dataflowsLoaded(data)));
};

