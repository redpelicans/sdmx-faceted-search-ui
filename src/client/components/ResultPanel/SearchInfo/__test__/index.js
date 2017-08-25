import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import Searchinfo from '..';

const { describe, it } = global;

describe ('<Searchinfo />', () => {
  const wrapper = shallow(<Searchinfo
    searchValue={'test'}
    numFound={10}
  />);
  it('Searchinfo should render a searchinfo div', () => {
    should(wrapper.find('.searchinfo')).length(1);
  })
  it('Searchinfo should render a pt-icon-large pt-icon-geosearch icon_search_result div', () => {
    should(wrapper.find('.pt-icon-large pt-icon-geosearch icon_search_result')).length(1);
  })
})
