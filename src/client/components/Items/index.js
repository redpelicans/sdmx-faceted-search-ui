import React from 'react';
import PropTypes from 'prop-types';

import './items.css';

const Items = ({ titleName, handleInput }) => (
  <div>
    <input type="radio" id={titleName} className="items" onClick={handleInput} />
    <h5>{titleName}</h5>
  </div>
);

Items.propTypes = {
  titleName: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Items;
