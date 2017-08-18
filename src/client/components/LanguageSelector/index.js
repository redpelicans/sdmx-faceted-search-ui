import React from 'react';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

const toggleLangSelector = () => document.getElementById('myDropdown').classList.toggle('show');

const LanguageSelector = ({ langs = [], currentLanguage = '', setLocale }) => (
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
          <div key={lang} className="lang">
            <a
              style={{ backgroundColor: currentLanguage === lang ? '#00BFFF' : '', fontWeight: 'bold' }}
              value={lang}
              onClick={event => {
                event.preventDefault();
                setLocale(lang);
                toggleLangSelector();
              }}
            >
              <i className={currentLanguage === lang ? 'pt-icon-tick' : ''} />
              {`  ${lang}`}
            </a>
          </div>
          ))
        }
      </div>
    </div>
  </div>
);

LanguageSelector.propTypes = {
  langs: PropTypes.array,
  setLocale: PropTypes.func,
  currentLanguage: PropTypes.string,
};

export default LanguageSelector;
