import React from 'react';
import PropTypes from 'prop-types';
import './Pager.css';

const Pager = ({ searchValue, start, rows, numFound, search }) => {
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
          onClick={() => search({ search: searchValue }, 0)}
        >
          First
        </div>
        {actualPage !== 1 &&
          <div className="pager_elem prev" onClick={start === 0 ? () => {} : () => search({ search: searchValue }, start - rows)}>
            <span className="pt-icon-standard pt-icon-double-chevron-left" />
          </div>
        }
        {actualPage > 1 &&
          <div
            className="pager_elem"
            onClick={() => search({ search: searchValue }, (actualPage - 2) * rows)}
          >
            {actualPage - 1}
          </div>
        }
        <div className="pager_elem selected">{actualPage}</div>
        {actualPage !== lastPage &&
          <div
            className="pager_elem"
            onClick={() => search({ search: searchValue }, (actualPage) * rows)}
          >
            {actualPage + 1}
          </div>
        }
        {actualPage !== lastPage &&
          <div
            className="pager_elem next"
            onClick={start + rows >= numFound ? () => {} : () => search({ search: searchValue }, start + rows)}
          >
            <span
              className="pt-icon-standard pt-icon-double-chevron-right"
            />
          </div>
        }
        <div
          className="last"
          onClick={() => search({ search: searchValue }, (lastPage * rows) - rows)}
        >
          Last
        </div>
      </div>
    </div>
  );
};

Pager.propTypes = {
  searchValue: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  numFound: PropTypes.number.isRequired,
  search: PropTypes.func.isRequired,
};

Pager.defaultProps = {
  numFound: 0,
};

export default Pager;
