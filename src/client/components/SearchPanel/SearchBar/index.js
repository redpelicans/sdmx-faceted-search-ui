import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';

import './SearchBar.css';

const SearchBar = ({ search, intl }) => (
  <div className="searchbarcontainer">
    <div className="search_icon_container">
      <span className="pt-icon-large pt-icon-search search_icon" />
    </div>
    <input
      onChange={event => {
        event.preventDefault();
        search({ search: event.target.value });
      }}
      className="searchbar_inner"
      placeholder={intl.formatMessage({ id: 'searchbar.placeholder' })}
      type="text"
    />
  </div>
);

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};
export default injectIntl(SearchBar);
