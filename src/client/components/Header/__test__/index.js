import React from 'react';
import should from 'should';
import Header from '..';
import { shallow } from 'enzyme';
import LanguageSelector from '../../LanguageSelector';

const { describe, it } = global;

describe ('<Header />', function () {
  it('Header should render a navbar', function () {
    const wrapper = shallow(<Header
      title="SDMX"
      language={['FR', 'En']}
    />);
    should(wrapper.matchesElement(<nav />));
  })
  it('Header should render a LanguageSelector Component', function () {
    const wrapper = shallow(<Header
      title="SDMX"
      language={['FR', 'En']}
    />);
    should(wrapper.find(LanguageSelector)).length(1);
  })
  it('Header should render two navbargroup divs', function () {
    const wrapper = shallow(<Header
      title="SDMX"
      language={['FR', 'En']}
    />);
    should(wrapper.find('.pt-navbar-group')).length(2);
  })
})
