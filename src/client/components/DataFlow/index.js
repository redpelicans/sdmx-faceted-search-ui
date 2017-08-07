import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

import './data_flow.css';

const DataFlow = ({ result, handleInput }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer">
    <div className="imagecontainer">
      <img alt="" className="image" src={result.payload.image} />
    </div>
    <div className="dataflowinfo">
      <li className="dataflowname">{result.payload.name}</li>
      <p className="price">price: {result.payload.price} $</p>
    </div>
    <button id={result.id} onClick={handleInput} />
  </div>
);

DataFlow.propTypes = {
  result: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
};

const handler = withHandlers({
  handleInput: ({ addToCard }) => event => {
    event.preventDefault();
    addToCard(event.target.id);
  },
})(DataFlow);

export default handler;
