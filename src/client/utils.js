import axios from 'axios';
import params from '../params';
import { alert } from './actions/message';

const { server: { host, port } } = params;
const manageError = (dispatch, message, status) => err => {
  console.error(err); // eslint-disable-line
  dispatch(alert(err.message, message, status));
};

export const requestJson = ({ dispatch, method, url, body, message = 'Runtime Error', status }) => axios({
  url: `http://${host}:${port}${url}`,
  method,
  data: body,
})
  .then(({ data }) => data)
  .catch(manageError(dispatch, message, status));
