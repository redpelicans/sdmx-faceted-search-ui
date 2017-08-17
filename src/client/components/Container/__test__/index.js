import React from 'react'
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
    expect(wrapper.find('.container')).toHaveLength(1);
  })
  it('Container should render a Header Component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  })
})
