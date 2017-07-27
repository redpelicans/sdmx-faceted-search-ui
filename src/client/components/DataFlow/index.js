import React from 'react';
import PropTypes from 'prop-types';

import './DataFlow.css';

const DataFlow = ({ name }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer">
    <div className="imagecontainer" />
    <p className="dataflowname">{name}</p>
  </div>
);

DataFlow.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DataFlow;
