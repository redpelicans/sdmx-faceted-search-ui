import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import { Popover2 } from '@blueprintjs/labs';
import {
  Menu,
  MenuItem,
  Position,
  PopoverInteractionKind,
  Button,
  Collapse,
} from '@blueprintjs/core';
import LanguageSelector, { SettingsMenu } from '..';

const { describe, it } = global;
const language = ['Fr', 'En'];

describe ('<LanguageSelector />', () => {
  it('LanguageSelector should render a languageselector div', () => {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find('.languageselector'));
  })
  it('LanguageSelector should render a Button Component', () => {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find(Button));
  })
  it('LanguageSelector should render a Collapse Component', () => {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find(Collapse));
  })
  it('LanguageSelector should render a Popover2 Component', () => {
    const wrapper = shallow(<LanguageSelector
      language={language}
    />);
    should(wrapper.find(Popover2));
  })
  it('SettingsMenu should render a Menu Component', () => {
    const wrapper = shallow(<SettingsMenu />);
    should(wrapper.find(Menu));
  })
  it('SettingsMenu should render 5 MenuItem Component', () => {
    const wrapper = shallow(<SettingsMenu langs={['fr', 'en', 'us', 'es']} />); // there is 1 MenuItem and 4 sub MenuItems
    should(wrapper.find(MenuItem).length).eql(4);
  })
})
