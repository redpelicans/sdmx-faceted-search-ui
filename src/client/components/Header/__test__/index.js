import React from 'react';
import should from 'should';
import Header from '..';
import { shallow } from 'enzyme';
import LanguageSelector from '../../LanguageSelector';

const { describe, it } = global;

describe ('<Header />', () => {
  const wrapper = shallow(<Header
    title="SDMX"
    language={[
      {
        id: 0,
        name: 'FR',
      },
      {
        id: 1,
        name: 'En',
      }
    ]}
  />);
  it('Header should render a navbar', () => {
    should(wrapper.matchesElement(<nav />));
  })
  it('Header should render a LanguageSelector Component', () => {
    should(wrapper.find(LanguageSelector));
  })
  it('Header should render two navbargroup divs', () => {
    should(wrapper.find('.pt-navbar-group'));
  })
})
