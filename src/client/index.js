import React from 'react';
import ReactDOM from 'react-dom';
import { propOr } from 'ramda';
import { Provider } from 'react-redux';
import { pathOr } from 'ramda';
import { IntlProvider } from 'react-intl';
import configureStore from './store';
import params from '../params';
import App from './components/App';

const initialState = {
  dataflows: [],
  facets: {},
  search: {
    start: 0,
    count: pathOr(10, ['search', 'count'], params),
    searchValue: '',
  },
};

const store = configureStore(initialState);
const navLang = propOr('en', 'language', navigator);

const root = (
  <Provider store={store}>
    <IntlProvider locale={store.language || navLang} >
      <App />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
