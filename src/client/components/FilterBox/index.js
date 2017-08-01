import React from 'react';
import PropTypes from 'prop-types';
import Filtre from './Filtre';
import './FilterBox.css';

const FilterBox = ({ name, filters, Filter }) => (
  <div className="pt-card pt-elevation-0 filterbox">
    <p className="filterboxname">{name}</p>
    {filters.map((filter) => (
      <Filtre
        key={filter.id}
        filter={filter.name}
        FilterFunc={Filter}
      />
    ))}
  </div>
);

FilterBox.propTypes = {
  name: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
  Filter: PropTypes.func.isRequired,
};

Filtre.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FilterBox;
