import axios from 'axios';
import params from '../params';
import { alert, ERROR } from './actions/message';

const { server: { host, port } } = params;
const manageError = (dispatch, header = 'Runtime Error', message = '', status = ERROR) => err => {
  console.error(err); // eslint-disable-line
  dispatch(alert(header, message, status));
};

export const requestJson = ({ dispatch, method, url, body, header, message }) => axios({
  url: `http://${host}:${port}${url}`,
  method,
  data: body,
})
  .then(({ data }) => data)
  .catch(manageError(dispatch, header, message));
