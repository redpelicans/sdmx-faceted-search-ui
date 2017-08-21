  import React from 'react';
  import PropTypes from 'prop-types';
  import Media from 'react-media';
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
        <Media key={dataflow.id} query={{ maxWidth: 1100 }}>
          {matches => matches ? (
            <DataFlow
              data={dataflow}
              screenSize
            />
          ) : (
            <DataFlow
              data={dataflow}
              screenSize={false}
            />
          )}
        </Media>
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
