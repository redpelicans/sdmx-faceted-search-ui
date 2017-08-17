import React from 'react';
import { shallow } from 'enzyme';
import ResultPanel from '..';

const { describe, it } = global;

describe ('<ResultPanel />', () => {
  it('ResultPanel should render a resultpanel div', () => {
    const wrapper = shallow(<ResultPanel
      displayShowPanel={() => {}}
      searchValue=""
      dataflows={ [] }
    />);
    expect(wrapper.find('.resultpanel')).toHaveLength(1);
  })
})
