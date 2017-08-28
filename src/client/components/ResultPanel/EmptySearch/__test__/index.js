import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import EmptySearch from '..';

const { describe, it } = global;

describe ('<EmptySearch />', () => {
  const wrapper = shallow(<EmptySearch
  />);
  it('EmptySearch should render a empty_search_container div', () => {
    should(wrapper.find('.empty_search_container')).length(1);
  })
  it('EmptySearch should render a emptysearch div', () => {
    should(wrapper.find('.emptysearch')).length(1);
  })
  it('EmptySearch should render a tips_icon div', () => {
    should(wrapper.find('.tips_icon')).length(1);
  })
  it('EmptySearch should render a empty_search_title div', () => {
    should(wrapper.find('.empty_search_title')).length(1);
  })
  it('EmptySearch should render a pt-list div', () => {
    should(wrapper.find('.pt-list')).length(1);
  })
})
