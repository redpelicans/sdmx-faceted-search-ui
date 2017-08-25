import React from 'react';
import should from 'should';
import { Motion } from 'react-motion';
import { shallow } from 'enzyme';
import SidePanel from '..';

const { describe, it } = global;

describe ('<SidePanel />', () => {
    const wrapper = shallow(<SidePanel
      facets={[]}
      sidePanelIsVisible={true}
      moveSidePanel={() => {}}
      overlay={true}
      search={() => {}}
    />);
  it('SidePanel should render a Motion Component', () => {
    should(wrapper.find(Motion)).length(1);
  })
})
