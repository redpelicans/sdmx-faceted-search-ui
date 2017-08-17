import React from 'react';
import { shallow } from 'enzyme';
import Items from '..';

const { describe, it} = global;

describe ('<Items />', () => {
  it('Items should render an items div', () => {
    const wrapper = shallow(<Items
      name="test"
    />);
    expect(wrapper.find('.items')).toHaveLength(1);
  })
  it('Items should render an itemsname div', () => {
    const wrapper = shallow(<Items
      name="test"
    />);
    expect(wrapper.find('.itemsname')).toHaveLength(1);
  })
})
