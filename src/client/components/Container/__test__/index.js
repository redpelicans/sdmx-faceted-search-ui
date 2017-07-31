import React from 'react'
import should from 'should';
import { shallow } from 'enzyme';
import Container from '..';
import Header from '../../Header';
import MainPanel from '../../MainPanel';

const { describe, it } = global;

const displayShowPanel = () => {
  console.log('function');
  //this.setState(({ showSidePanel }) => ({ showSidePanel: !showSidePanel }));
};

describe ('<Container />', function () {
  it('Container should render a container div', function () {
    const wrapper = shallow(<Container
      title="title"
      list={[]}
      language={[]}
      showSidePanel={true}
      displayShowPanel={displayShowPanel}
    />);
    should(wrapper.find('.container')).length(1);
  })
  it('Container should render a Header Component', function () {
    const wrapper = shallow(<Container
      title="title"
      list={[]}
      language={[]}
      showSidePanel={true}
      displayShowPanel={displayShowPanel}
    />);
    should(wrapper.find(Header)).length(1);
  })
})
