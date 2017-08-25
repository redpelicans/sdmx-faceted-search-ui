import React from 'react';
import PropTypes from 'prop-types';
import { Popover2 } from '@blueprintjs/labs';
import {
  Menu,
  MenuItem,
  Position,
  PopoverInteractionKind,
  Button,
} from '@blueprintjs/core';

import './LanguageSelector.css';

export const SettingsMenu = ({ langs = [], currentLanguage = '', setLocale }) => (
  <Menu>
    {langs.map(lang => currentLanguage === lang ?
      <MenuItem
        key={lang}
        iconName={'pt-icon-tick'}
        disabled
        className="menu-item"
        text={lang}
        onClick={event => {
          event.preventDefault();
          setLocale(lang);
        }}
      /> :
      <MenuItem
        key={lang}
        className="menu-item"
        text={lang}
        onClick={event => {
          event.preventDefault();
          setLocale(lang);
        }}
      />,
    )
  }
  </Menu>
);

const LanguageSelector = ({ langs = [], currentLanguage = '', setLocale }) => (
  <div>
    <Popover2
      position={Position.auto}
      interactionKind={PopoverInteractionKind.CLICK}
      content={
        <SettingsMenu langs={langs} currentLanguage={currentLanguage} setLocale={setLocale} />
      }
    >
      <Button className="dropdown-button pt-button pt-minimal pt-icon-caret-down">{currentLanguage}</Button>
    </Popover2>
  </div>
);

LanguageSelector.propTypes = {
  langs: PropTypes.array,
  currentLanguage: PropTypes.string,
  setLocale: PropTypes.func,
};

SettingsMenu.propTypes = {
  langs: PropTypes.array,
  currentLanguage: PropTypes.string,
  setLocale: PropTypes.func,
};

export default LanguageSelector;
