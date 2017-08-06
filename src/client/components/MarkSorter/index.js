import React from 'react';
import { PropTypes } from 'prop-types';
import { compose, withHandlers, withState } from 'recompose';
import { Motion, spring } from 'react-motion';
import './MarkSorter.css';

const MarkSorter = ({ marques, toggledivPositionHandler, divPosition, sortByMark }) => (
  <div className="mark_sorter_container" >
    <div className="line" />
    <div className="mark_sorter">
      <div className="goLeft" onClick={() => toggledivPositionHandler(1, marques)}>
        <span className="pt-icon-large pt-icon-chevron-left" />
      </div>
      <div className="marques_container">
        <Motion style={{ x: spring(divPosition) }}>
          {({ x }) => (
            <div
              className="marques_container_inner"
              style={{
                marginLeft: `${x}px`,
              }}
            >
              <div className="pt-card marque" onClick={() => sortByMark('')}>
                <p>All</p>
              </div>
              {marques.map(mapElem => (
                <div key={mapElem.id} className="pt-card marque" onClick={() => sortByMark(mapElem.name)}>
                  <p>{mapElem.name}</p>
                </div>
                ))
              }
            </div>
          )}
        </Motion>
      </div>
      <div className="goRight" onClick={() => toggledivPositionHandler(-1, marques)}>
        <span className="pt-icon-large pt-icon-chevron-right" />
      </div>
    </div>
    <div className="line" />
  </div>
);

MarkSorter.propTypes = {
  marques: PropTypes.array.isRequired,
  toggledivPositionHandler: PropTypes.func.isRequired,
  divPosition: PropTypes.number.isRequired,
  sortByMark: PropTypes.func.isRequired,
};

const enhance = compose(
  withState('divPosition', 'toggledivPosition', 0),
  withHandlers({ toggledivPositionHandler: ({ toggledivPosition }) =>
  (direction, marques) => toggledivPosition((divPosition) => {
    if ((divPosition + (230 * direction) <= 0) &&
    (divPosition + (230 * direction) >= (-230 * (marques.length)))) {
      return divPosition + (230 * direction);
    }
    return divPosition;
  },
  ) }),
);

export default enhance(MarkSorter);
