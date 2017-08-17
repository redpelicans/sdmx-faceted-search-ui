import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Pager from '../Pager';
import MiniPager from '../MiniPager';

import './SearchPanel.css';

const SearchPanel = ({ search, searchData, columnsDisplay }) => (
  <div className={columnsDisplay ? 'searchpanel columns' : 'searchpanel inline'}>
    <SearchBar
      search={search}
    />
    <div className="pager_wrapper">
      <Media query={{ maxWidth: 599 }}>
        {matches => matches ? (
          <MiniPager
            numFound={searchData.numFound}
            start={searchData.start}
            count={searchData.count}
            searchValue={searchData.searchValue}
            search={search}
          />
        ) : (
          <Pager
            numFound={searchData.numFound}
            start={searchData.start}
            count={searchData.count}
            searchValue={searchData.searchValue}
            search={search}
          />
        )}
      </Media>
    </div>
  </div>
);

SearchPanel.propTypes = {
  search: PropTypes.func.isRequired,
  searchData: PropTypes.object.isRequired,
  columnsDisplay: PropTypes.bool.isRequired,
};

export default SearchPanel;
