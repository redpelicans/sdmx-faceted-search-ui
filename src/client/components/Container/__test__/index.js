<<<<<<< HEAD
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
  const wrapper = shallow(<Container
    title="title"
    list={[]}
    language={[]}
    showSidePanel={true}
    displayShowPanel={displayShowPanel}
    Search={() => {}}
    searchValue=""
  />);
  it('Container should render a container div', function () {
    should(wrapper.find('.container')).length(1);
  })
  it('Container should render a Header Component', function () {
    should(wrapper.find(Header)).length(1);
  })
})
=======
import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import Container from '..';
import MainPanel from '../../MainPanel';
import Header from '../../Header';

const { describe, it } = global;

describe('Container component', function() {
    const root =
        <Container
            title='container'
            resultItems={['velo1', 'velo2']}
            showOverlayPanel={(value) => value}
            isHidden={true}
            langs={['1', '2', '3']}
        />
    const nbItems = obj => {
        let counter = 0, key;
        for (key in obj) {
            counter++;
        }
        return counter;
    }
    it('langs should not have 4', function() {
        const wrapper = shallow(root).props().children[0].props.langs;
        should(wrapper.includes('4')).eql(false);
    });
    it('resultItems should contain "velo2"', function() {
        const wrapper = shallow(root).props().children[1].props.resultItems;
        should(wrapper.includes('velo2')).eql(true);
    });
    it('should have 2 children', function() {
        const wrapper = shallow(root).props();
        should(wrapper.children.length).eql(2);
    });
    it('should have 5 props', function() {
        const wrapper1 = shallow(root).props().children[0].props;
        const wrapper2 = shallow(root).props().children[1].props;
        should(nbItems(wrapper1) + nbItems(wrapper2)).eql(5);
    });
});
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
