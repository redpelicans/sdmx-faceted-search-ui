import React from 'react';
import PropTypes from 'prop-types';
import './MiniPager.css';

const MiniPager = ({ start, rows, numFound, search }) => {
  if (numFound <= rows) {
    return <div />;
  }
  const actualPage = (Math.ceil((start + 1) / rows));
  const lastPage = (Math.ceil(numFound / rows));
  return (
    <div className="minipager_container">
      <div className="minipager_container_inner">
        <div className="minipager_elem first" onClick={() => search({}, 0, rows)}>
          <span
            className="pt-icon-standard pt-icon-double-chevron-left"
          />
        </div>
        {actualPage !== 1 &&
          <div className="minipager_elem prev" onClick={start === 0 ? () => {} : () => search({}, start - rows, rows)}>
            <span className="pt-icon-standard pt-icon-chevron-left" />
          </div>
        }
        <div>Page {actualPage}</div>
        {actualPage !== lastPage &&
          <div
            className="minipager_elem next"
            onClick={start + rows >= numFound ? () => {} : () => search({}, start + rows, rows)}
          >
            <span
              className="pt-icon-standard pt-icon-chevron-right"
            />
          </div>
          }
        <div className="minipager_elem last" onClick={() => search({}, (lastPage * rows) - rows, rows)}>
          <span
            className="pt-icon-standard pt-icon-double-chevron-right"
          />
        </div>
      </div>
    </div>
  );
};

MiniPager.propTypes = {
  start: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  numFound: PropTypes.number.isRequired,
  search: PropTypes.func.isRequired,
};

MiniPager.defaultProps = {
  numFound: 0,
};

export default MiniPager;
