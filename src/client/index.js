import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
import configureStore from './store';
import params from '../params';
import App from './components/App';
import { loadConfig } from './actions/config';
import messages from './messages.json';

addLocaleData([...fr, ...en]);

const { search: { rows = 10 } } = params;
const { navigator: { language } } = global;

window.onclick = (event) => {
  if (!event.target.matches('.dropdown-button')) {
    const myDropdown = document.getElementById('myDropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

const lang = 'en';

const initialState = {
  config: {
    currentLang: language,
  },
  intl: {
    language: 'en',
  },
  dataflows: [],
  facets: {},
  search: {
    start: 0,
    rows,
    searchValue: '',
  },
};

const store = configureStore(initialState);

store.dispatch(loadConfig());

const root = (
  <Provider store={store}>
    <IntlProvider
      locale={initialState.intl.locale || lang}
      message={messages[initialState.intl.locale] || messages[lang]}
    >
      <App />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
