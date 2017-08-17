import React from 'react';
import PropTypes from 'prop-types';
import './Pager.css';

const Pager = ({ searchValue, start, count, numFound, search }) => {
  if (numFound <= count) {
    return <div />;
  }
  const actualPage = (Math.ceil((start + 1) / count));
  const lastPage = (Math.ceil(numFound / count));
  return (
    <div className="pager_container">
      <div className="pager_container_inner">
        <div
          className="first"
          onClick={() => search(searchValue, 0, count)}
        >
          First
        </div>
        {actualPage !== 1 &&
          <div className="pager_elem prev" onClick={start === 0 ? () => {} : () => search(searchValue, start - count, count)}>
            <span className="pt-icon-standard pt-icon-double-chevron-left" />
          </div>
        }
        {actualPage > 1 &&
          <div
            className="pager_elem"
            onClick={() => search(searchValue, (actualPage - 2) * count, count)}
          >
            {actualPage - 1}
          </div>
        }
        <div className="pager_elem selected">{actualPage}</div>
        {actualPage !== lastPage &&
          <div
            className="pager_elem"
            onClick={() => search(searchValue, (actualPage) * count, count)}
          >
            {actualPage + 1}
          </div>
        }
        {actualPage !== lastPage &&
          <div
            className="pager_elem next"
            onClick={start + count >= numFound ? () => {} : () => search(searchValue, start + count, count)}
          >
            <span
              className="pt-icon-standard pt-icon-double-chevron-right"
            />
          </div>
        }
        <div
          className="last"
          onClick={() => search(searchValue, (lastPage * 10) - count, count)}
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
  count: PropTypes.number.isRequired,
  numFound: PropTypes.number.isRequired,
  search: PropTypes.func.isRequired,
};

Pager.defaultProps = {
  numFound: 0,
};

export default Pager;
