import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
import ConnectedIntlProvider from '../../ConnectedIntlProvider';
import messages from '../../../messages.json';
import App from '..';

const { describe, it } = global

const initialState = {
  intl: {
    language: 'en',
    messages,
  },
  dataflows: [],
  facets: {},
  search: {
    start: 0,
    rows: 10,
    searchValue: '',
  },
};

const store = configureStore(initialState);

describe('<App />', () => {
  const wrapper =  shallow(<Provider store={store}>
    <ConnectedIntlProvider>
      <App />
    </ConnectedIntlProvider>
  </Provider>)
  it('App should render a App component', () => {
    should(wrapper.find(App)).length(1);
  })
})
