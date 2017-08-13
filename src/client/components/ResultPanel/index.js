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
      {dataflows.map((dataflow, i) => {
        if (i % 3 === 2) {
          return (
            <Media key={dataflow.id} query={{ maxWidth: 1100 }}>
              {matches => matches ? (
                <DataFlow
                  data={dataflow}
                  screenSize
                  popoverPosition
                />
              ) : (
                <DataFlow
                  data={dataflow}
                  screenSize={false}
                  popoverPosition={false}
                />
              )}
            </Media>
          );
        }
        return (
          <Media key={dataflow.id} query={{ maxWidth: 1100 }}>
            {matches => matches ? (
              <DataFlow
                data={dataflow}
                screenSize
                popoverPosition
              />
            ) : (
              <DataFlow
                data={dataflow}
                screenSize={false}
                popoverPosition
              />
            )}
          </Media>
        );
      })}
      {!dataflows.length && <EmptySearch />}
    </div>
    );

  ResultPanel.propTypes = {
    dataflows: PropTypes.array.isRequired,
    searchValue: PropTypes.string.isRequired,
  };

  export default ResultPanel;
