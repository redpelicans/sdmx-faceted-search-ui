import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureStore from './store';
import App from './components/App';
import { loadConfig } from './actions/config';

const initialState = {};

const store = configureStore(initialState);

const load = () => store.dispatch(loadConfig());
load();

const root = (
  <Provider store={store}>
    <IntlProvider locale={navigator.language} >
      <App />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
