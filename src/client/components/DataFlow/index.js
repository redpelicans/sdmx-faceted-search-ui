import React from 'react';
import PropTypes from 'prop-types';

import './data_flow.css';

const DataFlow = ({ result }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer">
    <div>
      <li className="dataflowinfo">{ result }</li>
    </div>
  </div>
);

DataFlow.propTypes = {
  result: PropTypes.string.isRequired,
};

export default DataFlow;
