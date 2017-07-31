import React from 'react';
import PropTypes from 'prop-types';

const Filtre = ({ filter }) => (
  <label htmlFor={filter} className="pt-control pt-checkbox filteritems">
    <input type="checkbox" id={filter} className="checkbox" />
    <span className="pt-control-indicator checkbox" />
    {filter}
  </label>
);

Filtre.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filtre;
