import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureStore from './store';
import params from '../params';
import App from './components/App';
import { loadConfig } from './actions/config';

const { search: { rows = 10 } } = params;
const { navigator: { language } } = global;

const initialState = {
  config: {
    currentLang: language,
  },
  dataflows: [],
  facets: {},
  search: {
    start: 0,
    rows,
    searchValue: '',
  },
};

const store = configureStore(initialState);

store.dispatch(loadConfig());

const root = (
  <Provider store={store}>
    <IntlProvider locale={store.language || language} >
      <App />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
