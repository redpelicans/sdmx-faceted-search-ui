import React from 'react';
import PropTypes from 'prop-types';
import './Pager.css';

const Pager = ({ start, rows, numFound, search }) => {
  if (numFound <= rows) {
    return <div />;
  }
  const actualPage = (Math.ceil((start + 1) / rows));
  const lastPage = (Math.ceil(numFound / rows));
  return (
    <div className="pager_container">
      <div className="pager_container_inner">
        <div
          className="first"
          onClick={() => search({}, 0)}
        >
          First
        </div>
        {actualPage !== 1 &&
          <div className="pager_elem prev" onClick={start === 0 ? () => {} : () => search({}, start - rows)}>
            <span className="pt-icon-standard pt-icon-double-chevron-left" />
          </div>
        }
        {actualPage === lastPage &&
          <div
            className="pager_elem"
            onClick={() => search({}, (actualPage) * rows)}
          >
            {actualPage - 2}
          </div>
        }
        {actualPage > 1 &&
          <div
            className="pager_elem"
            onClick={() => search({}, (actualPage - 2) * rows)}
          >
            {actualPage - 1}
          </div>
        }
        <div className="pager_elem selected">{actualPage}</div>
        {actualPage !== lastPage &&
          <div
            className="pager_elem"
            onClick={() => search({}, (actualPage) * rows)}
          >
            {actualPage + 1}
          </div>
        }
        {actualPage === 1 &&
          <div
            className="pager_elem"
            onClick={() => search({}, (actualPage) * rows)}
          >
            {actualPage + 2}
          </div>
        }
        {actualPage !== lastPage &&
          <div
            className="pager_elem next"
            onClick={start + rows >= numFound ? () => {} : () => search({}, start + rows)}
          >
            <span
              className="pt-icon-standard pt-icon-double-chevron-right"
            />
          </div>
        }
        <div
          className="last"
          onClick={() => search({}, (lastPage * rows) - rows)}
        >
          Last
        </div>
      </div>
    </div>
  );
};

Pager.propTypes = {
  start: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  numFound: PropTypes.number.isRequired,
  search: PropTypes.func.isRequired,
};

Pager.defaultProps = {
  numFound: 0,
};

export default Pager;
