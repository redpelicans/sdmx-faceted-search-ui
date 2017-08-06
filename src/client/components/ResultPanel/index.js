  import React from 'react';
  import PropTypes from 'prop-types';
  import Media from 'react-media';
  import DataFlow from '../DataFlow';
  import SearchInfo from './SearchInfo';
  import SearchParams from '../SearchParams';
  import EmptySearch from './EmptySearch';
  import MarkSorter from '../MarkSorter';

  import './ResultPanel.css';

  const ResultPanel = ({ displayShowPanel, sortTypes, searchValue, dataflows, marques, sortByMark }) => (
    <div className="resultpanel">
      <SearchInfo
        dataflows={dataflows}
        searchValue={searchValue}
        searchsize={dataflows.length}
      />
      <SearchParams
        displayShowPanel={displayShowPanel}
        sortTypes={sortTypes}
      />
      <MarkSorter
        marques={marques}
        sortByMark={sortByMark}
      />
      {dataflows.map(lis => (
        <Media key={lis.id} query={{ maxWidth: 599 }}>
          {matches => matches ? (
            <DataFlow data={lis} direction="column" />
          ) : (
            <DataFlow data={lis} direction="row" />
          )}
        </Media>
    )) }
      {!dataflows.length && <EmptySearch />}
    </div>
    );

  ResultPanel.propTypes = {
    displayShowPanel: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    dataflows: PropTypes.array.isRequired,
    marques: PropTypes.array.isRequired,
    sortByMark: PropTypes.func.isRequired,
    sortTypes: PropTypes.array.isRequired,
  };

  export default ResultPanel;
