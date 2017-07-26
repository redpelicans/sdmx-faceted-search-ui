import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Provider from './Provider';
import { createStore } from './store';

import './index.css';

const initialState = {
  title: 'SDMX',
  language: ['Fr', 'En'],
  list: [
    'Vtt1',
    'Vtt2',
    'Vtt3',
    'Vtt4',
    'Vtt5',
    'Vtt6',
    'Vtt7',
    'Vtt8',
    'Vtt9',
    'Vtt10',
    'Vtt11',
    'Vtt12',
    'Vtt13',
  ],
};
const store = createStore(initialState);

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
