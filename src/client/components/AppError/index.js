import React from 'react';
import { Button } from '@blueprintjs/core';
import Header from '../Header';
import SidePanel from '../SidePanel';

import './AppError.css';

const ErrorMessage = () => (
  <div className="error_search_container">
    <div className="emptysearch">
      <h4 className="error_search_title">Runpage error :</h4>
      <p>Cannot load page</p>
      <ul className="pt-list">
        <li>Contact your server administrator</li>
        <li>Try to reload the page</li>
        <li>Reset your connection and retry</li>
      </ul>
      <Button iconName="pt-icon-refresh" className="reload-button" onClick={() => window.location.reload()}>Reload</Button>
    </div>
  </div>
);

const AppError = () => (
  <div className="error-app">
    <SidePanel facets={[]} sidePanelIsVisible moveSidePanel={() => {}} overlay={false} search={() => {}} />
    <div className="error-container">
      <Header langs={['en']} setLocale={() => {}} currentLanguage="en" />
      <ErrorMessage />
    </div>
  </div>
);

export default AppError;
