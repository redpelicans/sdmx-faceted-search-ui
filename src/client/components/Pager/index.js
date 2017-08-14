import React from 'react';
import PropTypes from 'prop-types';

import './Pager.css';

const Pager = ({ numberOfResult, changePage, searchValue, page }) => (
  <div className="pager_container">
    <div className="pager_container_inner">
      <div className="first">First</div>
      <div className="pager_elem prev">
        <span className="pt-icon-standard pt-icon-double-chevron-left" />
      </div>
      {(Math.round(numberOfResult / 10)) < 10 &&
        new Array(Math.round(numberOfResult / 10)).fill('').map(
          (elem, i) => (
            <div
              className={(i + 1) === page ? 'pager_elem selected' : 'pager_elem'}
              onClick={() => changePage(searchValue, i + 1)}
            >
              {i + 1}
            </div>
          ))
      }
      {(Math.round(numberOfResult / 10)) > 10 &&
        new Array(Math.round(numberOfResult / 10)).fill('').map(
          (elem, i) => (i < 10 && <div className="pager_elem">{i + 1}</div>
          ))
      }
      {(Math.round(numberOfResult / 10)) > 10 && <div className="pager_elem">...</div>}
      <div className="pager_elem next">
        <span className="pt-icon-standard pt-icon-double-chevron-right" />
      </div>
      <div className="last">Last</div>
    </div>
  </div>
);

Pager.propTypes = {
  numberOfResult: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default Pager;
