import React from 'react';
import PropTypes from 'prop-types';

import './FilterBox.css';

const FilterBox = ({ name, filters }) => (
  <div className="pt-card pt-elevation-0 filterbox">
    <p className="filterboxname">{name}</p>
    {filters.map(filter => (
      <label htmlFor={filter} className="pt-control pt-checkbox filteritems">
        <input type="checkbox" id={filter} className="checkbox" />
        <span className="pt-control-indicator checkbox" />
        {filter}
      </label>
    ))}
  </div>
);

FilterBox.propTypes = {
  name: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
};

export default FilterBox;
