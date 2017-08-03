import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

<<<<<<< HEAD
import './DataFlow.css';

const DataFlow = ({ data, direction }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer" style={{ flexDirection: direction }}>
    <div className="imagecontainer">
      <img alt="" className="image" src={data.Image} />
    </div>
    <div className="dataflowinfo">
      <p className="dataflowname">{data.Name}</p>
      <p className="price">{data.Prix} $</p>
    </div>
=======
import './data_flow.css';

const DataFlow = ({ result }) => (
  <div className="dataflow-container">
    <li>{ result }</li>
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
  </div>
);

DataFlow.propTypes = {
<<<<<<< HEAD
  data: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
=======
  result: PropTypes.string.isRequired,
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
};

export default onlyUpdateForKeys(['data', 'direction'])(DataFlow);
