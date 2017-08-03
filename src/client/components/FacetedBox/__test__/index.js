import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import FacetedBox from '../../FacetedBox';
import Items from '../../Items';

const { describe, it } = global;

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
