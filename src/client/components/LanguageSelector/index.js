import React from 'react';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

const LanguageSelector = ({ language }) => (
  <div className="languageselector">
    <p>{language}</p>
    <i className="fa fa-chevron-down chev" aria-hidden="true" />
  </div>
);

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
};

export default LanguageSelector;
