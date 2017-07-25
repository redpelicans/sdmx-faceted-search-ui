import React from 'react';
import PropTypes from 'prop-types';

import './DataFlow.css';

const DataFlow = ({ name }) => (
  <div className="dataflowcontainer">
    <div className="dataflowelem">
      <div className="imagecontainer" />
      <p className="dataflowname">{name}</p>
    </div>
  </div>
);

DataFlow.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DataFlow;
