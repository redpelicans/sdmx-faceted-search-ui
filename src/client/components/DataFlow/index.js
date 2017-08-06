import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

import './DataFlow.css';

const DataFlow = ({ data, direction }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer" style={{ flexDirection: direction }}>
    <div className="pt-card imagecontainer">
      <img alt="" className="image" src={data.Image} />
    </div>
    <div className="dataflowinfo">
      <p className="dataflowname">{data.Name}</p>
      <h3 className="price">{data.Prix} $</h3>
    </div>
  </div>
);

DataFlow.propTypes = {
  data: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['data', 'direction'])(DataFlow);
