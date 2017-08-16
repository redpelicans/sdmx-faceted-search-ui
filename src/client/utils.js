import axios from 'axios';
import params from '../params';
import { alert } from './actions/message';

const { server: { host, port } } = params;
const manageError = (dispatch, header, message, status) => err => {
  console.error(err); // eslint-disable-line
  dispatch(alert(header, message, status));
};

export const requestJson = ({ dispatch, method, url, body, header, message = 'Runtime error', status }) => axios({
  url: `http://${host}:${port}${url}`,
  method,
  data: body,
})
  .then(({ data }) => data)
  .catch(manageError(dispatch, header, message, status));
