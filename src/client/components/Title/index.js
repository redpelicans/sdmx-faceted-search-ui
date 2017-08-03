import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
import './Title.css';

const Title = ({ name }) => (
  <div className="title">
    <h1>{name}</h1>
=======
import './title.css';

const Title = ({ title }) => (
  <div className="title-container">
    <h2>{ title }</h2>
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
  </div>
);

Title.propTypes = {
<<<<<<< HEAD
  name: PropTypes.string.isRequired,
=======
  title: PropTypes.string.isRequired,
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
};

export default Title;
