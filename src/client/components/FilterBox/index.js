import React from 'react';
import PropTypes from 'prop-types';
import Filtre from './Filtre';
import './FilterBox.css';

const FilterBox = ({ name, filters }) => (
  <div className="pt-card pt-elevation-0 filterbox">
    <p className="filterboxname">{name}</p>
    {filters.map((filter) => (
      <Filtre
        filter={filter}
      />
    ))}
  </div>
);

FilterBox.propTypes = {
  name: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
};

Filtre.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FilterBox;
