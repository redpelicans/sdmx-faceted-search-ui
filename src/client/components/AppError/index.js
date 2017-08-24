import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import Header from '../Header';
import SidePanel from '../SidePanel';

import './AppError.css';

export const ErrorMessage = () => (
  <div className="error_search_container">
    <div className="error-card pt-elevation-4">
      <br />
      <h4 className="error_search_title">Runtime error :</h4>
      <p>Cannot load page</p>
      <ul className="pt-list">
        <li>Contact your server administrator</li>
        <li>Try to reload the page</li>
        <li>Reset your connection and retry</li>
      </ul>
      <Button iconName="pt-icon-refresh" className="reload-button" onClick={() => window.location.reload()}>Reload</Button>
      <br />
    </div>
  </div>
);

const AppError = ({ isErrorFound }) => (
  <div className="error-app">
    <SidePanel facets={[]} sidePanelIsVisible moveSidePanel={() => {}} overlay={false} search={() => {}} />
    <div className="error-container">
      <Header langs={['en', 'fr']} setLocale={() => {}} currentLanguage="en" />
      {isErrorFound && <ErrorMessage />}
    </div>
  </div>
);

AppError.propTypes = {
  isErrorFound: PropTypes.bool,
};

export default AppError;
