import React from 'react';
import PropTypes from 'prop-types';

import './DataFlow.css';

const DataFlow = ({ data }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer">
    <div className="imagecontainer">
      <img alt="" className="image" src={data.Image} />
    </div>
    <div className="dataflowinfo">
      <p className="dataflowname">{data.Name}</p>
      <p className="price">{data.Prix} $</p>
    </div>
  </div>
);

DataFlow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataFlow;
