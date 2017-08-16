import React from 'react';
import { pure } from 'recompose';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

const LanguageSelector = ({ languages = [], changeLang }) => (
  <div className="languageselector">
    <div className="pt-select">
      <select onChange={e => {
        e.preventDefault();
        changeLang(e.target.value);
      }}
      >
        {languages.map((language) => (
          <option key={language} value={language}>{language}</option>
        ))}
      </select>
    </div>
  </div>
);

LanguageSelector.propTypes = {
  languages: PropTypes.array.isRequired,
  changeLang: PropTypes.func.isRequired,
};

export default pure(LanguageSelector);
