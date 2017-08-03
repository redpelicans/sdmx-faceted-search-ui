import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
<<<<<<< HEAD
import FacetedBox from '../../FacetedBox';
=======

import FacetedBox from '..';
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
import Items from '../../Items';

const { describe, it } = global;

<<<<<<< HEAD
describe ('<FacetedBox />', function () {
  const wrapper = shallow(<FacetedBox
    name="test"
    facets={['Tout', 'Sports, vacances', 'Autres', 'Camping, randonnée']}
  />);
  it('FacetedBox should render a facetedbox div', function () {
    should(wrapper.find('.facetedbox')).length(1);
  })
  it('FacetedBox should render a facetedboxname div', function () {
    should(wrapper.find('.facetedboxname')).length(1);
  })
  it('FacetedBox should render a 4 Items', function () {
    should(wrapper.find(Items)).length(4);
  })
  it('FacetedBox should render a 2 Items', function () {
    const wrapper = shallow(<FacetedBox
      name="test"
      facets={['Tout', 'Sports, vacances']}
    />);
    should(wrapper.find(Items)).length(2);
  })
})
=======
describe('Tests FacetedBox components', function() {
    const root = <FacetedBox titleName='test' />
    const nbItems = obj => {
        let counter = 0, key;
        for (key in obj) {
            counter++;
        }
        return counter;
    }
   it('Should have only one prop', function() {
        const wrapper = shallow(root).props().children[0].props;
        should(nbItems(wrapper)).eql(1);
    });
    it('Should be a string prop', function() {
        const wrapper = shallow(root).props().children[0].props.children;
        should(typeof(wrapper) === typeof('string')).eql(true);
    });
    it('Should call <Items> prop', function() {
        const wrapper = shallow(root);
        should(wrapper.matchesElement(<Items />));
    });
});
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
