import React from 'react';
import { FormattedMessage } from 'react-intl';

import './EmptySearch.css';

const EmptySearch = () => (
  <div className="empty_search_container">
    <div className="emptysearch">
      <div className="tips_icon">
        <span className="pt-icon-issue" />
      </div>
      <h5 className="empty_search_title"><FormattedMessage id="search.tips.header" defaultMessages="Search tips" /></h5>
      <ul className="pt-list">
        <li><FormattedMessage id="search.tip.spelling" defaultMessages="wrong spelling" /></li>
        <li><FormattedMessage id="search.tip.keywords" defaultMessages="wrong keywords" /></li>
        <li><FormattedMessage id="search.tip.filters" defaultMessages="wrong filters" /></li>
      </ul>
    </div>
  </div>
);

export default EmptySearch;
