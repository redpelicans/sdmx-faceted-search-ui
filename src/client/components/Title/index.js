import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = ({ titleName }) => (
  <div className="title-container">
    <h2>{ titleName }</h2>
  </div>
);

Title.propTypes = {
  titleName: PropTypes.string.isRequired,
};

export default Title;
