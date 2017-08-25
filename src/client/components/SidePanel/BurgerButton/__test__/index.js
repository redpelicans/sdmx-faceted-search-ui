import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import { Tooltip2 } from '@blueprintjs/labs';
import BurgerButton from '..';

const { describe, it } = global;

describe('<BurgerButton />', () => {
  const wrapper = shallow(<BurgerButton
    displayShowPanel={() => {}}
  />);
  it('BurgerButton should render a button', () => {
    should(wrapper.matchesElement(<div />));
  })
  it('BurgerButton should render a burger_button_container', () => {
    should(wrapper.find('.burger_button_container')).length(1);
  })
  it('BurgerButton should render a Tooltip2 Component', () => {
    should(wrapper.find(Tooltip2)).length(1);
  })
})
