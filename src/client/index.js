import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { pathOr } from 'ramda';
import { IntlProvider } from 'react-intl';
import configureStore from './store';
import params from '../params';
import App from './components/App';

const initialState = {
  dataflows: [],
  search: {
    start: 0,
    count: pathOr(10, ['search', 'count'], params),
    searchValue: '',
  },
};
const store = configureStore(initialState);

const root = (
  <Provider store={store}>
    <IntlProvider locale={(store.language || navigator.language)} >
      <App />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
