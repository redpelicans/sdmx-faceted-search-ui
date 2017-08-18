import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
import ConnectedIntlProvider from './components/ConnectedIntlProvider';
import configureStore from './store';
import params from '../params';
import App from './components/App';
import { loadConfig } from './actions/config';
import messages from './messages.json';

addLocaleData([...fr, ...en]);

const { search: { count = 10 } } = params;
const { navigator: { language } } = global;

const initialState = {
  config: {
    currentLang: language,
  },
  intl: {
    language: 'en',
    messages,
  },
  dataflows: [],
  facets: {},
  search: {
    start: 0,
    count,
    searchValue: '',
  },
};

const store = configureStore(initialState);

store.dispatch(loadConfig());

const root = (
  <Provider store={store}>
    <ConnectedIntlProvider>
      <App />
    </ConnectedIntlProvider>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
