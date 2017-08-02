import '@blueprintjs/core/dist/blueprint.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';

const title = 'SDMX';
const langs = [
  { id: 1, value: 'Fr' },
  { id: 2, value: 'En' },
  { id: 3, value: 'Du' },
];
const resultItems = [
  { id: 1, value: 'vtt' },
  { id: 2, value: 'velo de course' },
  { id: 3, value: 'velo de ville' },
  { id: 4, value: 'velo electrique' },
];

const searchValue = '';
const isHidden = true;

const initialState = {
  title,
  langs,
  resultItems,
  searchValue,
  isHidden,
};

const store = configureStore(initialState);

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

const mountNode = document.getElementById('root');

render(root, mountNode);
