import { requestJson } from '../utils';

export const CONFIGLOADED = 'CONFIGLOADED';
export const configLoaded = ({ langs, defaultLang }) => ({ type: CONFIGLOADED, langs, defaultLang });

export const loadConfig = () => dispatch => {
  requestJson({
    dispatch,
    method: 'get',
    url: '/api/config',
    message: 'Cannot load config',
  })
  .then(data => dispatch(configLoaded(data)));
};
