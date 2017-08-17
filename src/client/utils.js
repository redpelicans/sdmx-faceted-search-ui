import axios from 'axios';
import params from '../params';
import { alert, ERROR } from './actions/message';

const { server: { host, port } } = params;
const manageError = (dispatch, { title = 'Runtime Error', label = '' }) => err => {
  console.error(err); // eslint-disable-line
  dispatch(alert(title, label, ERROR));
};

export const requestJson = ({ dispatch, method, url, body, headers, message }) => {
  const path = `http://${host}:${port}${url}`;
  return axios[method](path, body, { headers })
  .then(({ data }) => data)
    .catch(manageError(dispatch, message));
};
