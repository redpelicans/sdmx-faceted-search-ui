import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, intlShape, injectIntl } from 'react-intl';

import './SearchBar.css';

const placeholder = defineMessages({
  message: {
    id: 'searchbar.placeholder',
    defaultMessage: 'Search',
  },
});

const SearchBar = ({ search, facets, intl }) => (
  <div className="searchbarcontainer">
    <div className="search_icon_container">
      <span className="pt-icon-large pt-icon-search search_icon" />
    </div>
    <input
      onChange={event => {
        event.preventDefault();
        search({ search: event.target.value, facets });
      }}
      className="searchbar_inner"
      placeholder={intl.formatMessage(placeholder.message)}
      type="text"
    />
  </div>
);

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  facets: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};
export default injectIntl(SearchBar);
