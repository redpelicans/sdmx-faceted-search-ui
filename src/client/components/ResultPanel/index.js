  import React from 'react';
  import PropTypes from 'prop-types';
  import Media from 'react-media';
  import DataFlow from '../DataFlow';
  import SearchInfo from './SearchInfo';
  import EmptySearch from './EmptySearch';

  import './ResultPanel.css';

  const ResultPanel = ({ dataflows, searchValue }) => (
    <div className="resultpanel">
      <SearchInfo
        dataflows={dataflows}
        searchValue={searchValue}
      />
      {dataflows.data.map(lis => (
        <Media key={lis.id} query={{ maxWidth: 599 }}>
          {matches => matches ? (
            <DataFlow data={lis} direction="column" />
          ) : (
            <DataFlow data={lis} direction="row" />
          )}
        </Media>
    )) }
      {!dataflows.data.length && <EmptySearch />}
    </div>
    );

  ResultPanel.propTypes = {
    dataflows: PropTypes.object.isRequired,
    searchValue: PropTypes.string.isRequired,
  };

  export default ResultPanel;
