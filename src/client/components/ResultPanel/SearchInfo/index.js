import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import './SearchInfo.css';

const SearchInfo = ({ searchValue = '\'\'', numFound = 0 }) => (
  <div className="searchinfo">
    <span className="pt-icon-large pt-icon-geosearch icon_search_result" />
    <FormattedNumber value={numFound} />
    <FormattedMessage
      id={'search.infos'}
      defaultMessage={'results for {searchValue}'}
      values={{
        searchValue,
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
