import React from 'react';
import PropTypes from 'prop-types';
import './Pager.css';

const Pager = ({ searchValue, start, count, numFound, search }) => (
  <div className="pager_container">
    <div className="pager_container_inner">
      <div
        className="first"
        onClick={() => search(searchValue, 0, count)}
      >First</div>
      <div className="pager_elem prev" onClick={start === 0 ? () => {} : () => search(searchValue, start - count, count)}>
        <span className="pt-icon-standard pt-icon-double-chevron-left" />
      </div>
      <div
        className="pager_elem next"
        onClick={start + count >= numFound ? () => {} : () => search(searchValue, start + count, count)}
      >
        <span
          className="pt-icon-standard pt-icon-double-chevron-right"
        />
      </div>
      <div
        className="last"
        onClick={() => search(searchValue, numFound - count, count)}
      >Last</div>
    </div>
  </div>
);

Pager.propTypes = {
  searchValue: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  numFound: PropTypes.number.isRequired,
  search: PropTypes.func.isRequired,
};

export default Pager;
