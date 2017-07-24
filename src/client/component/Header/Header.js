import React from 'react';
import Title from '../Title';
import Languageselector from '../Languageselector';
import './Header.css';

const Header = () => (
  <div className="header">
    <Title
      name="SDMX"
    />
    <Languageselector
      language="Fr"
    />
  </div>
);

export default Header;
