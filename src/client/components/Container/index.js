import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import HeaderLeft from '../Header/HeaderLeft';
import HeaderRight from '../Header/HeaderRight';
import LanguageSelector from '../LanguageSelector';
import MainPanel from '../MainPanel';
import Title from '../Title';
import './Container.css';

const Container = ({ title, language }) => (
  <div className="container">
    <Header>
      <HeaderLeft>
        <Title name={title} />
      </HeaderLeft>
      <HeaderRight>
        <LanguageSelector language={language} />
      </HeaderRight>
    </Header>
    <MainPanel />
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  language: PropTypes.array.isRequired,
};

export default Container;
