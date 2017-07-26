import React from 'react';

import './header.css';
import Title from '../Title';
import LanguageSelector from '../LanguageSelector';

const Header = () => (
  <div className="header-container">
    <Title titleName="SDMX" />
    <LanguageSelector langs={['anglais', 'allemand']} />
  </div>
);

export default Header;
