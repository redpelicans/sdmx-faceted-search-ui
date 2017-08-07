import React from 'react';
import PropTypes from 'prop-types';

import './faceted_box.css';
import Items from '../Items';

const FacetedBox = ({ handleInput }) => (
  <div className="pt-card pt-elevation-0 facetedbox">
    <Items titleName="vtt" handleInput={handleInput} />
    <Items titleName="velo de ville" handleInput={handleInput} />
    <Items titleName="velo de course" handleInput={handleInput} />
    <Items titleName="velo electrique" handleInput={handleInput} />
    <Items titleName="all" handleInput={handleInput} />
  </div>
);

FacetedBox.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default FacetedBox;
