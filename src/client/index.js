import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureStore from './store';
import App from './components/App';

const initialState = {};

const store = configureStore(initialState);

const root = (
  <Provider store={store}>
    <IntlProvider locale={(store.language || navigator.language)} >
      <App />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
