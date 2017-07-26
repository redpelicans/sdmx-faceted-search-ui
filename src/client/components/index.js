import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Provider from './Provider';
import { createStore } from './Store';

const initialState = {
  title: 'coucou',
  langs: ['fr', 'ang'],
};

const store = createStore(initialState);

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);
const mountNode = document.getElementById('root');

render(root, mountNode);
