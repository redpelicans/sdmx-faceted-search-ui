  import React from 'react';
  import PropTypes from 'prop-types';
  import Media from 'react-media';
  import DataFlow from '../DataFlow';
  import SearchInfo from './SearchInfo';
  import SearchParams from '../SearchParams';
  import EmptySearch from './EmptySearch';

  import './ResultPanel.css';

  const ResultPanel = ({ displayShowPanel, searchValue, list }) => (
    <div className="resultpanel">
      <SearchInfo
        list={list}
        searchValue={searchValue}
        searchsize={list.length}
      />
      <SearchParams
        displayShowPanel={displayShowPanel}
      />
      {list.map(lis => (
        <Media key={lis.id} query={{ maxWidth: 599 }}>
          {matches => matches ? (
            <DataFlow data={lis} direction="column" />
          ) : (
            <DataFlow data={lis} direction="row" />
          )}
        </Media>
    )) }
      {!list.length && <EmptySearch />}
    </div>
    );

  ResultPanel.propTypes = {
    displayShowPanel: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
  };

  export default ResultPanel;
