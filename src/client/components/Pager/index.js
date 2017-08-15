import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import './Pager.css';

const Pager = ({ numberOfResult, changePage, searchValue, page }) => {
  const printPagerCells = R.map((tabelem) => (
    tabelem !== false &&
    <div
      key={tabelem}
      className={(tabelem + 1) === page ? 'pager_elem selected' : 'pager_elem'}
      onClick={() => changePage(searchValue, tabelem + 1)}
    >
      {tabelem + 1}
    </div>
  ));

  const getPagerCells = R.times((i) => ((i > page - 3 && i < page + 1) && i), Math.ceil(numberOfResult / 10));

  const buildPagerCells = R.map((elem) => elem, printPagerCells(getPagerCells));
  return (
    <div className="pager_container">
      <div className="pager_container_inner">
        <div className="first" onClick={() => changePage(searchValue, 1)}>First</div>
        <div className="pager_elem prev">
          <span
            className="pt-icon-standard pt-icon-double-chevron-left"
            onClick={page > 1 ? () => changePage(searchValue, page - 1) : () => {}}
          />
        </div>
        {page > 2 && <div className="pager_elem">...</div>}
        {buildPagerCells}
        {page < Math.ceil(numberOfResult / 10) - 1 && <div className="pager_elem more">...</div>}
        <div className="pager_elem next">
          <span
            className="pt-icon-standard pt-icon-double-chevron-right"
            onClick={page < Math.ceil(numberOfResult / 10) ? () => changePage(searchValue, page + 1) : () => {}}
          />
        </div>
        <div className="last" onClick={() => changePage(searchValue, Math.ceil(numberOfResult / 10))}>Last</div>
      </div>
    </div>
  );
};

Pager.propTypes = {
  numberOfResult: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default Pager;
