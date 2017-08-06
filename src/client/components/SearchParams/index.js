import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import SortBox from './SortBox';
import AffBox from './AffBox';
import TypeSelector from './TypeSelector';
import BurgerButton from '../BurgerButton';
import './SearchParams.css';


const SearchParams = ({ displayShowPanel, sortTypes }) => (
  <Media query="(max-width: 800px)">
    {matches => matches ? (
      <div className="searchparams-container_small">
        <BurgerButton
          displayShowPanel={displayShowPanel}
        />
        <TypeSelector />
        <SortBox
          sortTypes={sortTypes}
        />
        <AffBox />
      </div>
          ) : (
            <div className="searchparams-container_big">
              <BurgerButton
                displayShowPanel={displayShowPanel}
              />
              <TypeSelector />
              <SortBox
                sortTypes={sortTypes}
              />
              <AffBox />
            </div>
          )}
  </Media>
);

SearchParams.propTypes = {
  displayShowPanel: PropTypes.func.isRequired,
  sortTypes: PropTypes.array.isRequired,
};

export default SearchParams;
