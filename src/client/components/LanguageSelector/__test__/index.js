import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
<<<<<<< HEAD
import { Button, Collapse } from '@blueprintjs/core';
import LanguageSelector from '..';

const { describe, it } = global;
const language = ['Fr', 'En'];

describe ('<LanguageSelector />', function () {
  it('LanguageSelector should render a languageselector div', function () {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find('.languageselector')).length(1);
  })
  it('LanguageSelector should render a Button Component', function () {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find(Button)).length(1);
  })
  it('LanguageSelector should render a Collapse Component', function () {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find(Collapse)).length(1);
  })
})
=======

import LanguageSelector from '..';

const { describe, it } = global;

describe('Tests component LanguageSelector\n', function() {
    const root = <LanguageSelector langs={[
        {id:1, value:'fr'},
        {id:2, value:'en'},
        {id:3, value:'du'},
    ]} />
    const nbItems = obj => {
        let counter = 0, key;
        for (key in obj) {
            counter++;
        }
        return counter;
    }
    it('Should have only one prop', function() {
        const wrapper = shallow(root).props().children;
        should(wrapper.props.children.length).eql(3);
    });
    it('Should have 3 object in langs', function() {
        const wrapper = shallow(root).props().children.props.children;
        should(nbItems(wrapper)).eql(3);
    });
});
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
