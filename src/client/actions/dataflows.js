import { propOr } from 'ramda';
import { requestJson } from '../utils';

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';
export const SEARCH = 'SEARCH';
export const CHANGEPAGE = 'CHANGEPAGE';
export const NUMBERRESULTSLOADED = 'NUMBERRESULTSLOADED';
export const SELECTEDPAGE = 'SELECTEDPAGE';

const dataflowsLoaded = dataflows => ({
  type: DATAFLOWSLOADED,
  dataflows,
});

const NumberResultsLoaded = nb => ({
  type: NUMBERRESULTSLOADED,
  numberOfResult: nb,
});

const selectedPage = page => ({
  type: SELECTEDPAGE,
  page,
});

export const changePage = (value, page) => dispatch => {
  dispatch(selectedPage(page));
  requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value, start: page } })
    .then(data => dispatch(dataflowsLoaded(propOr([], 'dataflows', data))));
};

export const search = value => dispatch => {
  dispatch({ type: SEARCH, value });
  if (!value) {
    dispatch(dataflowsLoaded([]));
    dispatch(NumberResultsLoaded(0));
  } else {
    requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value } })
      .then(data => dispatch(dataflowsLoaded(propOr([], 'dataflows', data))));
    requestJson({ dispatch, method: 'post', url: '/api/search', body: { search: value } })
      .then(data => dispatch(NumberResultsLoaded(data.numFound)));
  }
};

