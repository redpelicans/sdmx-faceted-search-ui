import React from 'react';
import should from 'should';
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
      facets={{}}
    />);
  it('MainPanel should render a mainpanel div', () => {
    should(wrapper.find('.mainpanel')).length(1);
  })
  it('MainPanel should render a mainpanel_inner div', () => {
    should(wrapper.find('.mainpanel_inner')).length(1);
  })
  it('MainPanel should render a ResultPanel component', () => {
    should(wrapper.find(ResultPanel)).length(1);
  })
})
