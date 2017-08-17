import React from 'react';
import { shallow } from 'enzyme';
import MainPanel from '..';
import SearchPanel from '../../SearchPanel';
import ResultPanel from '../../ResultPanel';

const { describe, it } = global;

const displayShowPanel = () => {
  console.log("fonction");
}

const search = () => {
  console.log("fonction");
}

describe ('<MainPanel />', () => {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      dataflows={[]}
      searchValue=''
      search={search}
    />);
  it('MainPanel should render a mainpanel div', () => {
    expect(wrapper.find('.mainpanel')).toHaveLength(1);
  })
  it('MainPanel should render a mainpanel_inner div', () => {
    expect(wrapper.find('.mainpanel_inner')).toHaveLength(1);
  })
  it('MainPanel should render a SearchPanel component', () => {
    expect(wrapper.find(SearchPanel)).toHaveLength(1);
  })
  it('MainPanel should render a ResultPanel component', () => {
    expect(wrapper.find(ResultPanel)).toHaveLength(1);
  })
})
