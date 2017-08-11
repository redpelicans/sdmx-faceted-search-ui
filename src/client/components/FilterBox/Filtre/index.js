import React from 'react';
import PropTypes from 'prop-types';

const Filtre = ({ filter }) => (
  <label htmlFor={filter} className="pt-control pt-radio filteritems">
    <input
      type="radio"
      id={filter}
      name="docs-radio-regular"
      className="checkbox"
    />
    <span className="pt-control-indicator checkbox" />
    {filter}
  </label>
);

Filtre.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filtre;
