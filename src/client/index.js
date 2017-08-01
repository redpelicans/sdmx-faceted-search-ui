import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Provider from './Provider';
import Data from './data';
import { createStore } from './store';

import './index.css';

const initialState = Data;
const store = createStore(initialState);

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
