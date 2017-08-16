import { requestJson } from '../utils';

export const DEFAULTLANG = 'DEFAULTLANG';
export const CURRENTLANG = 'CURRENTLANG';
export const SETLANG = 'SETLANG';
export const CONFIGLOADED = 'CONFIGLOADED';

export const setLang = lang => dispatch => dispatch(({ type: SETLANG, lang }));
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

