import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Provider from './Provider';
import { createStore } from './store';

import './index.css';

const initialState = {
  title: 'SDMX',
  language: ['Fr', 'En'],
};
const store = createStore(initialState);

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
