import axios from 'axios';
import params from '../params';
import { alert, ERROR } from './actions/message';

const { server: { host, port } } = params;
const manageError = (dispatch, message) => err => {
  console.error(err); // eslint-disable-line
  dispatch(alert(message, ERROR));
};

export const requestJson = ({ dispatch, method, url, body, message = 'Runtime Error' }) => axios({
  url: `http://${host}:${port}${url}`,
  method,
  data: body,
})
  .then(({ data }) => data)
  .catch(manageError(dispatch, message));
