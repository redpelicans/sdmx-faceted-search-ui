import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import App from '../../App';
import AppError from '../../AppError';
import ConnectedIntlProvider from '..';

const { describe, it } = global;

describe ('<ConnectedIntlProvider />', () => {
  
  it('Component should render an AppError', () => {
    const wrapper = shallow(<ConnectedIntlProvider message="test" locale={undefined} />);
    should(wrapper.matchesElement(<AppError isErrorFound={false} />));
  })
  it('Component should not render an AppError', () => {
    const wrapper = shallow(<ConnectedIntlProvider message={undefined} locale="en" />);
    should(wrapper.matchesElement(<AppError isErrorFound={false} />)).eql(false);
  })
  it('Component should render an App', () => {
    const wrapper = shallow(<ConnectedIntlProvider message={undefined} locale="en" />);
    should(wrapper.matchesElement(<App />));
  })
  it('Component should have property children', () => {
    const wrapper = shallow(<ConnectedIntlProvider message={undefined} locale="en" />);
    wrapper.should.have.properties('children');
  })
})
