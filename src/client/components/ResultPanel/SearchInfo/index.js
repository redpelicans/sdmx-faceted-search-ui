import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './SearchInfo.css';

const SearchInfo = ({ searchValue = '\'\'', numFound = 0 }) => (
  <div className="searchinfo">
    <span className="pt-icon-large pt-icon-geosearch icon_search_result" />
    <FormattedMessage
      id="search.infos"
      defaultMessage="{numFound} results for '{searchValue}'"
      values={{
        searchValue,
        numFound: numFound.toString(),
      }}
    />
  </div>
);

SearchInfo.propTypes = {
  searchValue: PropTypes.string.isRequired,
  numFound: PropTypes.number.isRequired,
};

SearchInfo.defaultProps = {
  numFound: 0,
};

export default SearchInfo;
