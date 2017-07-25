import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = ({ name }) => (
  <div className="title">
    <h1>{name}</h1>
  </div>
);

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
