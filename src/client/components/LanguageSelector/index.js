import React from 'react';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

const toggleLangSelector = () => document.getElementById('myDropdown').classList.toggle('show');

const LanguageSelector = ({ langs = [], setLocale }) => (
  <div className="languageselector">
    <div className="dropdown">
      <button
        className="dropdown-button pt-button pt-minimal pt-icon-cog"
        onClick={event => {
          event.preventDefault();
          toggleLangSelector();
        }}
      />
      <div className="dropdown-content" id="myDropdown">
        { langs.map(lang => (
          <a
            key={lang}
            value={lang}
            onClick={event => {
              event.preventDefault();
              setLocale(lang);
              toggleLangSelector();
            }}
          >
            {lang}
          </a>))
        }
      </div>
    </div>
  </div>
);

LanguageSelector.propTypes = {
  langs: PropTypes.array,
  setLocale: PropTypes.func,
};

export default LanguageSelector;
