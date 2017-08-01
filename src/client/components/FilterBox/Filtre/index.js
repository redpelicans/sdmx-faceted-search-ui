import React from 'react';
import PropTypes from 'prop-types';

const Filtre = ({ filter, FilterFunc }) => (
  <label htmlFor={filter} className="pt-control pt-radio filteritems">
    <input
      type="radio"
      id={filter}
      name="docs-radio-regular"
      className="checkbox"
      onClick={() => FilterFunc(filter)}
    />
    <span className="pt-control-indicator checkbox" />
    {filter}
  </label>
);

Filtre.propTypes = {
  filter: PropTypes.string.isRequired,
  FilterFunc: PropTypes.func.isRequired,
};

export default Filtre;
