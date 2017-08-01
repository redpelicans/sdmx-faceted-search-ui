import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import SortBox from './SortBox';
import TypeSelector from './TypeSelector';
import BurgerButton from '../BurgerButton';
import './SearchParams.css';


const SearchParams = ({ displayShowPanel, handleChangeTypeOfSale }) => (
  <Media query="(max-width: 800px)">
    {matches => matches ? (
      <div className="searchparams-container_small">
        <BurgerButton
          displayShowPanel={displayShowPanel}
        />
        <TypeSelector
          handleChangeTypeOfSale={handleChangeTypeOfSale}
        />
        <SortBox />
      </div>
          ) : (
            <div className="searchparams-container_big">
              <BurgerButton
                displayShowPanel={displayShowPanel}
              />
              <TypeSelector
                handleChangeTypeOfSale={handleChangeTypeOfSale}
              />
              <SortBox />
            </div>
          )}
  </Media>
);

SearchParams.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
  handleChangeTypeOfSale: PropTypes.func.isRequired,
};

export default SearchParams;
