import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

class LanguageSelector extends Component {
  state = {
    active: false,
  }

  changeLanguageSelectorState = () => {
    const { active } = this.state;

    this.setState({ active: !active });
  }

  render() {
    const { language } = this.props;
    const { active } = this.state;

    return (
      <div className={active ? 'languageselector unwraped' : 'languageselector'}>
        <div className="selectedlanguage">
          <p>{language}</p>
          <i onClick={this.changeLanguageSelectorState} className="fa fa-chevron-down chev" aria-hidden="true" />
        </div>
        <p>{language}</p>
      </div>
    );
  }
}

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
};

export default LanguageSelector;
