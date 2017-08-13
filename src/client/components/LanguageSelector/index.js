import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { languages } from '../../../params';
import './LanguageSelector.css';

const LanguageSelector = () => (
  <div className="languageselector">
    <div className="pt-select">
      <select>
        {languages.map((language) => (
          <option key={language.id} value={language.id}>{language.value}</option>
        ))}
      </select>
    </div>
  </div>
);

LanguageSelector.defaultProps = {
  languages: [],
};

export default onlyUpdateForKeys(['language'])(LanguageSelector);
