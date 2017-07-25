import React from 'react';
import PropTypes from 'prop-types';

import './Items.css';

const Items = ({ name }) => (
  <div className="items">
    <p className="itemsname">{name}</p>
  </div>
);

Items.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Items;
