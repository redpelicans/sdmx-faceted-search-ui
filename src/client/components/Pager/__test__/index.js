import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Pager from '..';

const { describe, it } = global;

describe ('<Pager />', () => {
  const wrapper = shallow(<Pager
      start={0}
      rows={10}
      numFound={11}
      search={() => {}}
    />);
  it('Pager should render a pager_container div', () => {
    should(wrapper.find('.pager_container')).length(1);
  })
  it('Pager should render a pager_container_inner div', () => {
    should(wrapper.find('.pager_container_inner')).length(1);
  })
  it('Pager should render 3 pager_elem div', () => {
    should(wrapper.find('.pager_elem')).length(3);
  })
  it('Pager should not render a pager_elem prev div', () => {
    should(wrapper.find('.pager_elem prev')).length(0);
  })
  it('Pager should not render a single pager_elem selected prev div', () => {
    should(wrapper.find('.selected')).length(1);
  })
  it('Pager should not render a single last div', () => {
    should(wrapper.find('.last')).length(1);
  })
   it('Pager should not render a span div', () => {
    should(wrapper.find('span')).length(1);
  })
  const wrapper2 = shallow(<Pager
      start={10}
      rows={100}
      numFound={250}
      search={() => {}}
    />);
  it('Pager should not render a signle pager_elem selected prev div', () => {
    should(wrapper2.find('.selected')).length(1);
  })
  it('Pager should render 3 pager_elem div', () => {
    should(wrapper2.find('.pager_elem')).length(4);
  })
  it('Pager should not render a span div', () => {
    should(wrapper2.find('span')).length(1);
  })
  it('simulates click event for page', () => {
    const search = sinon.spy();
    wrapper2.find('.next').simulate('click');
    should(search.calledOnce).equal(false);
  })
})
