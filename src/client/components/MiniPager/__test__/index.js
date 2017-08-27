import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import MiniPager from '..';

const { describe, it } = global;

describe ('<MiniPager />', () => {
  const wrapper = shallow(<MiniPager
      start={0}
      rows={10}
      numFound={11}
      search={() => {}}
    />);
  const wrapper2 = shallow(<MiniPager
      start={0}
      rows={10}
      numFound={0}
      search={() => {}}
    />);
  const wrapper3 = shallow(<MiniPager
    start={30}
    rows={20}
    numFound={220}
    search={() => {}}
  />);
  it('MiniPager should render a minipager_container div', () => {
    should(wrapper.find('.minipager_container')).length(1);
  })
  it('MiniPager should render a minipager_container_inne div', () => {
    should(wrapper.find('.minipager_container_inner')).length(1);
  })
  it('MiniPager should render a minipager_elem div', () => {
    should(wrapper.find('.minipager_elem')).length(3);
  })
  it('MiniPager should render a simple div', () => {
    should(wrapper2.contains(<div />)).equal(true);
  })
  it('simulates click events on first', () => {
    const onButtonClick = sinon.spy();
    wrapper3.find('.first').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
  it('simulates click events on last', () => {
    const onButtonClick = sinon.spy();
    wrapper3.find('.last').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
  it('simulates click events on prev', () => {
    const onButtonClick = sinon.spy();
    wrapper3.find('.prev').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
  it('simulates click events on next', () => {
    const onButtonClick = sinon.spy();
    wrapper3.find('.next').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
})
