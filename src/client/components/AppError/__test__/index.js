import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import { Button } from '@blueprintjs/core';

import SidePanel from '../../SidePanel';
import Header from '../../Header';
import AppError, { ErrorMessage } from '..';

const { describe, it } = global;

describe ('<AppError />', () => {
  it('Component AppError should render an SidePanel', () => {
    const wrapper = shallow(<AppError isErrorFound={true}/>);
    should(wrapper.matchesElement(SidePanel));
  })
  it('Component AppError should render an Header', () => {
    const wrapper = shallow(<AppError isErrorFound={true}/>);
    should(wrapper.matchesElement(Header));
  })
  it('Component AppError should render an ErrorMessage', () => {
    const wrapper = shallow(<AppError isErrorFound={true}/>);
    should(wrapper.matchesElement(ErrorMessage));
  })
  it('Component AppError should not render an ErrorMessage', () => {
    const wrapper = shallow(<AppError isErrorFound={false}/>);
    should(wrapper.matchesElement(ErrorMessage)).eql(false);
  })
  it('Component ErrorMessage should render a Button', () => {
    const wrapper = shallow(<ErrorMessage />);
    should(wrapper.matchesElement(Button));
  })
  it('Component ErrorMessage should render 3 <li>', () => {
    const wrapper = shallow(<ErrorMessage />);
    should(wrapper.matchesElement(<li />));
  })
  it('Component ErrorMessage should render 1 <ul>', () => {
    const wrapper = shallow(<ErrorMessage />);
    should(wrapper.matchesElement(<ul />));
  })
})