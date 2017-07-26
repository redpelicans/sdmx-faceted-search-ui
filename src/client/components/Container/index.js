import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import HeaderLeft from '../Header/HeaderLeft';
import HeaderRight from '../Header/HeaderRight';
import LanguageSelector from '../LanguageSelector';
import MainPanel from '../MainPanel';
import Title from '../Title';
import './Container.css';

const Container = ({ title }) => (
  <div className="container">
    <Header>
      <HeaderLeft>
        <Title name={title} />
      </HeaderLeft>
      <HeaderRight>
        <LanguageSelector />
      </HeaderRight>
    </Header>
    <MainPanel />
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Container;
