<<<<<<< HEAD
import React, { Component } from 'react';
import { Button, Collapse } from '@blueprintjs/core';
import PropTypes from 'prop-types';

import './LanguageSelector.css';

class LanguageSelector extends Component {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { language } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="languageselector">
        <Button onClick={this.handleClick}>
          {language[0].name}
        </Button>
        <Collapse isOpen={isOpen}>
          <pre>
            Fr
          </pre>
          <pre>
            En
          </pre>
        </Collapse>
      </div>
    );
  }
}

LanguageSelector.propTypes = {
  language: PropTypes.array.isRequired,
=======
import React from 'react';
import PropTypes from 'prop-types';

import './language_selector.css';

const LanguageSelector = ({ langs }) => (
  <div className="language-selector-container">
    <select>
      { langs.map(lang => <option key={lang.id}>{lang.value}</option>) }
    </select>
  </div>
);

LanguageSelector.propTypes = {
  langs: PropTypes.array.isRequired,
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
};

export default LanguageSelector;
