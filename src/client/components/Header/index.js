import React from 'react';

import './header.css';
import Title from '../Title';
import LanguageSelector from '../LanguageSelector';
import HeaderLeft from '../HeaderLeft';
import HeaderRight from '../HeaderRight';
import SidePanelButton from '../SidePanelButton';

const Header = () => (
  <div className="header-container">
    <HeaderLeft>
      <SidePanelButton />
      <Title titleName="SDMX" />
    </HeaderLeft>
    <HeaderRight>
      <LanguageSelector langs={['anglais', 'allemand']} />
    </HeaderRight>
  </div>
);

export default Header;
