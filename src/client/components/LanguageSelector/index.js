import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

const LanguageSelector = ({ languages }) => (
  <div className="languageselector">
    <div className="pt-select">
      <select>
        {languages.map((language) => (
          <option key={language.id} value={language.id}>{language.name}</option>
        ))}
      </select>
    </div>
  </div>
);

LanguageSelector.propTypes = {
  languages: PropTypes.array.isRequired,
};

LanguageSelector.defaultProps = {
  languages: [],
};

export default onlyUpdateForKeys(['language'])(LanguageSelector);
