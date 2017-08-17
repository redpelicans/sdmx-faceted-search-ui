import { equals, find, propOr } from 'ramda';
import { requestJson } from '../utils';
import { setLocale } from './intl';

export const CONFIGLOADED = 'CONFIGLOADED';
export const configLoaded = ({ langs, defaultLang, facets }) => ({ type: CONFIGLOADED, langs, defaultLang, facets });

export const loadConfig = () => (dispatch, getState) => {
  requestJson({
    dispatch,
    method: 'get',
    url: '/api/config',
    message: 'Cannot load config',
  })
  .then(config => {
    const { config: { currentLang } } = getState();
    const { defaultLang } = config;
    const language = find(equals(currentLang), propOr([], 'langs', config)) || defaultLang;
    dispatch(setLocale(language));
    dispatch(configLoaded(config));
  });
};
