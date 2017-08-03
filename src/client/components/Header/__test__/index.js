import React from 'react';
import should from 'should';
<<<<<<< HEAD
import Header from '..';
import { shallow } from 'enzyme';
=======
import { shallow } from 'enzyme';

import Header from '..';
import Title from '../../Title';
import SidePanelButton from '../../SidePanelButton';
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
import LanguageSelector from '../../LanguageSelector';

const { describe, it } = global;

<<<<<<< HEAD
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
=======
describe('<Header />', function() {
	const root = <Header title='test' langs={['test2']} showOverlayPanel={(value) => value} isHidden={true} />
	it('should render burger button', function() {
		should(shallow(root).matchesElement(<SidePanelButton isHidden={true} showOverlayPanel={(value) => value} />));
	});
	it('should render title', function() {
		should(shallow(root).matchesElement(<Title title='test' />));
	});
	it('should render language selector', function() {
		should(shallow(root).matchesElement(<LanguageSelector langs={['test2']} />));
	});
});
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
