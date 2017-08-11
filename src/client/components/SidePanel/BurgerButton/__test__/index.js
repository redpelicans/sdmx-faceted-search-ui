import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import BurgerButton from '..';

const { describe, it } = global;

const displayShowPanel = () => {
  console.log('function');
};

describe('<BurgerButton />', function () {
  const wrapper = shallow(<BurgerButton
    displayShowPanel={displayShowPanel}
  />);
  it('BurgerButton should render a button', function () {
    should(wrapper.matchesElement(<div />));
  })
})
