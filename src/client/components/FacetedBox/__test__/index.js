import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import Facets from '../../FacetedBox';
import CategoryFacet from '../CategoryFacet';
import DimensionFacet from '../DimensionFacet';

const { describe, it } = global;

describe ('<Facets />', () => {
  const wrapper = shallow(<Facets
    facets={[
      {
        id: 0,
        type: 'category',
        name: 'All',
      },
      {
        id: 1,
        type: 'category',
        name: 'sport',
      },
      {
        id: 2,
        type: 'category',
        name: 'Camping, randonnée',
      },
      {
        id: 3,
        type: 'dimension',
        name: 'Equipement du cycliste',
      }
    ]}
    search={() => {}}
  />);
  const wrapper2 = shallow(<Facets
    facets={[
      {
        id: 0,
        name: 'All',
      },
    ]}
    search={() => {}}
  />);
  it('Facets should render a single facet div', () => {
    should(wrapper.find('.facet'));
  })
  it('Facets should render 3 CategoryFacet', () => {
    should(wrapper.find(CategoryFacet)).length(3);
  })
  it('Facets should render a DimensionFacet', () => {
    should(wrapper.find(DimensionFacet)).length(1);
  })
  it('Facets should render a facetedbox div', () => {
    should(wrapper2.find('.facetedbox')).length(1);
  })
  it('Facets should nt render a DimensionFacet', () => {
    should(wrapper2.find(DimensionFacet)).length(0);
  })
  it('Facets should nt render a DimensionFacet', () => {
    should(wrapper2.find(CategoryFacet)).length(0);
  })
})
