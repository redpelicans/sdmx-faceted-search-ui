import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import ResultPanel from '..';
import SearchInfo from '../SearchInfo';
import DataFlow from '../../DataFlow';

const { describe, it } = global;

describe ('<ResultPanel />', () => {
  const wrapper = shallow(<ResultPanel
    displayShowPanel={() => {}}
    searchValue=""
    dataflows={ [{id: 0}, {id: 1}] }
  />);
  const wrapper2 = shallow(<ResultPanel
    displayShowPanel={() => {}}
    searchValue=""
    dataflows={ [{id: 0}, {id: 1}, {id: 2}, {id: 3}] }
  />);
  it('ResultPanel should render a resultpanel div', () => {
    should(wrapper.find('.resultpanel')).length(1);
  })
  it('ResultPanel should render a SearchInfo Component', () => {
    should(wrapper.find(SearchInfo)).length(1);
  })
  it('ResultPanel should render 2 DataFlow Component', () => {
    should(wrapper.find(DataFlow)).length(2);
  })
  it('ResultPanel should render 4 DataFlow Component', () => {
    should(wrapper2.find(DataFlow)).length(4);
  })
})
