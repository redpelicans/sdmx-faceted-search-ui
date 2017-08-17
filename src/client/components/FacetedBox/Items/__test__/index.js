import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import Items from '..';

const { describe, it} = global;

describe ('<Items />', () => {
  it('Items should render an items div', () => {
    const wrapper = shallow(<Items
      name="test"
    />);
    should(wrapper.find('.items')).length(1);
  })
  it('Items should render an itemsname div', () => {
    const wrapper = shallow(<Items
      name="test"
    />);
    should(wrapper.find('.itemsname')).length(1);
  })
})
