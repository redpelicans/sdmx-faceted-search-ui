import React from 'react'
import should from 'should';
import { shallow } from 'enzyme';
import Container from '..';
import Header from '../../Header';
import MainPanel from '../../MainPanel';

const { describe, it } = global;

const displayShowPanel = () => {
  console.log('function');
};

describe ('<Container />', () => {
  const wrapper = shallow(<Container
    title="title"
    dataflows={[]}
    language={[]}
    showSidePanel={true}
    displayShowPanel={displayShowPanel}
    search={() => {}}
    searchValue=""
  />);
  it('Container should render a container div', () => {
    should(wrapper.find('.container')).length(1);
  })
  it('Container should render a Header Component', () => {
    should(wrapper.find(Header)).length(1);
  })
})
