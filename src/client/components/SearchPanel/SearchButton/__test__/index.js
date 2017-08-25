import React from 'react';
import should from 'should';
import { Motion } from 'react-motion';
import { AnchorButton } from '@blueprintjs/core';
import { shallow } from 'enzyme';
import SearchButton from '..';

const { describe, it } = global;

describe ('<SearchButton />', () => {
  const wrapper = shallow(<SearchButton
    />);
  it('SearchButton should render a searchbuttoncontainer div', () => {
    should(wrapper.find('.searchbuttoncontainer')).length(1);
  })
  it('SearchButton should render a AnchorButton Component', () => {
    should(wrapper.find(AnchorButton)).length(1);
  })
})
