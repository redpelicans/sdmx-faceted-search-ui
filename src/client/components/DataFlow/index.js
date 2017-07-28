import React from 'react';
import PropTypes from 'prop-types';

import './DataFlow.css';

const DataFlow = ({ data }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer">
    <div className="imagecontainer">
      <img className="image" src={data.Image} />
    </div>
    <p className="dataflowname">{data.Name}</p>
  </div>
);

DataFlow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataFlow;
