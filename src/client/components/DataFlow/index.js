import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

import './DataFlow.css';

const DataFlow = ({ data }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer">
    <p className="name">{data.name}</p>
    <p className="agency" >Agency: {data.agency}</p>
    <p className="version">Version: {data.version}</p>
  </div>
);

DataFlow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default onlyUpdateForKeys(['data', 'direction'])(DataFlow);
