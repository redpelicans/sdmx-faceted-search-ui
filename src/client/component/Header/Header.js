import React from 'react';
import Title from '../Title';
import LanguageSelector from '../LanguageSelector';
import './Header.css';

const Header = () => (
  <div className="header">
    <Title
      name="SDMX"
    />
    <LanguageSelector
      language="Fr"
    />
  </div>
);

export default Header;
