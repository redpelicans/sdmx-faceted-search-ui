import React from 'react';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

const LanguageSelector = ({ langs = [], setLang }) => (
  <div className="languageselector">
    <div className="pt-select">
      <select onChange={e => {
        e.preventDefault();
        setLang(e.target.value);
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
  setLang: PropTypes.func,
};

export default LanguageSelector;
