  import React from 'react';
  import PropTypes from 'prop-types';
  import DataFlow from '../DataFlow';
  import SearchInfo from './SearchInfo';
  import EmptySearch from './EmptySearch';

  import './ResultPanel.css';

  const ResultPanel = ({ dataflows, searchValue, searchData = {} }) => (
    <div className="resultpanel">
      <SearchInfo
        searchValue={searchValue}
        numFound={searchData.numFound}
      />
      {dataflows.map(dataflow => (
        <DataFlow
          key={dataflow.id}
          data={dataflow}
        />
      ))}
      {(searchData.numFound === 0 || !searchData.numFound) && <EmptySearch />}
    </div>
    );

  ResultPanel.propTypes = {
    dataflows: PropTypes.array.isRequired,
    searchValue: PropTypes.string,
    searchData: PropTypes.object,
  };

  export default ResultPanel;
