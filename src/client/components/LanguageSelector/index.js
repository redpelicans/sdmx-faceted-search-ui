import React from 'react';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

const LanguageSelector = ({ langs = [], setLocale }) => (
  <div className="languageselector">
    <div className="pt-select">
      <select onChange={e => {
        e.preventDefault();
        setLocale(e.target.value);
      }}
      >
        {langs.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  </div>
);

LanguageSelector.propTypes = {
  langs: PropTypes.array,
  setLocale: PropTypes.func,
};

export default LanguageSelector;
