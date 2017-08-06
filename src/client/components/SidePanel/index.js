import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys, withHandlers } from 'recompose';

import './side_panel.css';
import FacetedBox from '../FacetedBox';
import SidePanelButton from '../SidePanelButton';

const SidePanel = ({ isHidden, toggleIsHiddenHandler, handleInput }) => (
  <div className="sidepanel" style={{ display: isHidden ? 'none' : 'flex' }}>
    <SidePanelButton isHidden={isHidden} toggleIsHiddenHandler={toggleIsHiddenHandler} />
    <FacetedBox handleInput={handleInput} />
    <input id="slidebar" type="range" min="0" max="5000" onInput={handleInput} />
  </div>
);

SidePanel.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  toggleIsHiddenHandler: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
};

const handler = withHandlers({
  handleInput: ({ doFacetedSearch, doFilter }) => event => {
    event.preventDefault();
    doFacetedSearch(event.target.value.toString());
    doFilter(event.target.id);
  },
})(SidePanel);

export default onlyUpdateForKeys(['isHidden'])(handler);
