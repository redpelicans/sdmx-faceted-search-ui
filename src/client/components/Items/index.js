import React from 'react';
import PropTypes from 'prop-types';

import './Items.css';

const Items = ({ name, FacetedSearch }) => (
  <div className="items" onClick={() => FacetedSearch(name)}>
    <p className="itemsname">{name}</p>
  </div>
);

Items.propTypes = {
  name: PropTypes.string.isRequired,
  FacetedSearch: PropTypes.func.isRequired,
};

export default Items;
