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

const SettingsMenu = ({ langs = [], currentLanguage = '', setLocale }) => (
  <Menu>
    <MenuItem className="menu-item" text="Language">
      {langs.map(lang =>
        currentLanguage === lang ?
          <MenuItem
            key={lang}
            iconName={'pt-icon-tick'}
            disabled
            className="menu-item"
            text={lang}
            onClick={() => setLocale(lang)}
          /> :
          <MenuItem
            key={lang}
            className="menu-item"
            text={lang}
            onClick={() => setLocale(lang)}
          />,
        )
      }
    </MenuItem>
  </Menu>
);

// X dataflows found
// X dataflows trouves

const LanguageSelector = ({ langs = [], currentLanguage = '', setLocale }) => (
  <div>
    <Popover2
      position={Position.auto}
      interactionKind={PopoverInteractionKind.CLICK}
      content={
        <SettingsMenu langs={langs} currentLanguage={currentLanguage} setLocale={setLocale} />
      }
    >
      <Button className="dropdown-button pt-button pt-minimal pt-icon-cog" />
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
