import axios from 'axios';
import params from '../../params';

const { server: { host, port } } = params;

export const DATAFLOWSLOADED = 'DATAFLOWSLOADED';

const dataflowsLoaded = dataflows => ({
  type: DATAFLOWSLOADED,
  dataflows,
});

export const search = value => dispatch => {
  axios.post(`http://${host}:${port}/api/search`, { search: value })
    .then(data => dispatch(dataflowsLoaded(data.dataflows)));
};

