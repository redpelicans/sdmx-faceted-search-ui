import React from 'react';
import PropTypes from 'prop-types';

import './container.css';
import Header from '../Header';
import HeaderLeft from '../Header/HeaderLeft';
import HeaderRight from '../Header/HeaderRight';
import Title from '../Title';
import MainPanel from '../MainPanel';
import LanguageSelector from '../LanguageSelector';
import SidePanelButton from '../SidePanelButton';

const Container = ({ title, langs, resultItems }) => (
  <div className="container-container">
    <Header>
      <HeaderLeft>
        <SidePanelButton />
        <Title title={title} />
      </HeaderLeft>
      <HeaderRight>
        <LanguageSelector langs={langs} />
      </HeaderRight>
    </Header>
    <MainPanel resultItems={resultItems} />
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
};

export default Container;
