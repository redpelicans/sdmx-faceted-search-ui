import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import Data from './data';
import { getFacetedBoxs } from './actions';

import './index.css';

const store = configureStore(Data);

store.dispatch(getFacetedBoxs());

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
