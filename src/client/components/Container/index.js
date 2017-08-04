import React from 'react';
import PropTypes from 'prop-types';

import './container.css';
import Header from '../Header';
import MainPanel from '../MainPanel';

const Container = ({ title, langs, resultItems, toggleIsHiddenHandler, isHidden, searchHandler, searchValue }) => (
  <div className="container-container">
    <Header title={title} langs={langs} toggleIsHiddenHandler={toggleIsHiddenHandler} isHidden={isHidden} />
    <MainPanel searchValue={searchValue} resultItems={resultItems} searchHandler={searchHandler} />
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
  toggleIsHiddenHandler: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  searchHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Container;
