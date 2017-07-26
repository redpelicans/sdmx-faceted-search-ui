import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from '../../connect';

import './LanguageSelector.css';

class LanguageSelector extends Component {
  state = {
    active: false,
  }

  changeLanguageSelectorState = () => {
    this.setState(({ active }) => ({ active: !active }));
  }

  render() {
    const { language } = this.props;
    const { active } = this.state;

    return (
      <div className={active ? 'languageselector unwraped' : 'languageselector'}>
        <div className="selectedlanguage">
          <p>{language[0]}</p>
          <i
            onClick={this.changeLanguageSelectorState}
            className={active ? 'fa fa-chevron-up chev' : 'fa fa-chevron-down chev'}
            aria-hidden="true"
          />
        </div>
        {active && language.map(lang => (<div
          key={lang}
          className="languageitem"
        ><p>{lang}</p></div>))}
      </div>
    );
  }
}

LanguageSelector.propTypes = {
  language: PropTypes.array.isRequired,
};

export default connect(LanguageSelector);
