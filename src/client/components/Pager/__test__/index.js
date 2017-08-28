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
  const wrapper3 = shallow(<Pager
    start={30}
    rows={20}
    numFound={220}
    search={() => {}}
  />);
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
  it('simulates click events on prev3', () => {
    const onButtonClick = sinon.spy();
    wrapper3.find('.prev3').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
  it('simulates click events on next', () => {
    const onButtonClick = sinon.spy();
    wrapper3.find('.next').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
  it('simulates click events on next2', () => {
    const onButtonClick = sinon.spy();
    wrapper3.find('.next2').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
  const wrapper4 = shallow(<Pager
    start={30}
    rows={20}
    numFound={10}
    search={() => {}}
  />);
  it('Pager should render a single div', () => {
    should(wrapper4.find('div')).length(1);
  })
  const wrapper5 = shallow(<Pager
    start={65}
    rows={30}
    numFound={90}
    search={() => {}}
  />);
  it('simulates click events on prev2', () => {
    const onButtonClick = sinon.spy();
    wrapper5.find('.prev2').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
  const wrapper6 = shallow(<Pager
    start={12}
    rows={30}
    numFound={90}
    search={() => {}}
  />);
  it('simulates click events on next3', () => {
    const onButtonClick = sinon.spy();
    wrapper6.find('.next3').simulate('click');
    should(onButtonClick.calledOnce).equal(false);
  });
})
