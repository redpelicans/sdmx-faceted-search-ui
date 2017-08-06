import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { PropTypes } from 'prop-types';
import { Collapse } from '@blueprintjs/core';

import './SortBox.css';

const SortBox = ({ toggleClickHandler, isOpen, sortTypes }) => (
  <div className="sortbox">
    <p className="sortboxtitle">Sort:</p>
    <div className="pt-button-group" onMouseEnter={toggleClickHandler}>
      <a className="pt-button" tabIndex="0" role="button">
        relevance <span className="pt-icon-standard pt-icon-caret-down pt-align-right" />
      </a>
    </div>
    <Collapse isOpen={isOpen}>
      <pre className="sortboxcontent" onMouseLeave={toggleClickHandler}>
        {sortTypes.map(sortType => (
          <div key={sortType.id} className="sortboxcontent_elem">
            <p>{sortType.name}</p>
          </div>
        ))}
      </pre>
    </Collapse>
  </div>
);

SortBox.propTypes = {
  toggleClickHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  sortTypes: PropTypes.array.isRequired,
};

const enhance = compose(
  withState('isOpen', 'toggleClick', false),
  withHandlers({ toggleClickHandler: ({ toggleClick }) => () => toggleClick((isOpen) => !isOpen) }),
);

export default enhance(SortBox);
