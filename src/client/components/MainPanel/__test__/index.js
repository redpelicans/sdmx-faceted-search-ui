import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
<<<<<<< HEAD
import MainPanel from '..';
import SearchPanel from '../../SearchPanel';
import ResultPanel from '../../ResultPanel';

const { describe, it } = global;

const displayShowPanel = () => {
  console.log("fonction");
}

describe ('<MainPanel />', function () {
  it('MainPanel should render a mainpanel div', function () {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      size="100"
      list={[]}
    />);
    should(wrapper.find('.mainpanel')).length(1);
  })
  it('MainPanel should render a mainpanel_inner div', function () {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      size="100"
      list={[]}
    />);
    should(wrapper.find('.mainpanel_inner')).length(1);
  })
  it('MainPanel should render a SearchPanel component', function () {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      size="100"
      list={[]}
    />);
    should(wrapper.find(SearchPanel)).length(1);
  })
  it('MainPanel should render a ResultPanel component', function () {
    const wrapper = shallow(<MainPanel
      displayShowPanel={displayShowPanel}
      size="100"
      list={[]}
    />);
    should(wrapper.find(ResultPanel)).length(1);
  })
})
=======

import MainPanel from '..';

const { describe, it } = global;

describe('Tests component MainPanel\n', function() {
    const root = <MainPanel resultItems={[
        {id:1, value:'test1'},
        {id:2, value:'test2'},
        {id:3, value:'test3'},
        {id:4, value:'test4'},
    ]} />
    it('Should have 4 object in resultItems', function() {
        const wrapper = shallow(root).props().children[1].props;
        should(wrapper.resultItems.length).eql(4);
    });
});
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
