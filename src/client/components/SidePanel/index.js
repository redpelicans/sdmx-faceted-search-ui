import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

import './side_panel.css';
import FacetedBox from '../FacetedBox';
import SidePanelButton from '../SidePanelButton';

const SidePanel = ({ isHidden, toggleIsHiddenHandler }) => (
  <div className="sidepanel" style={{ display: isHidden ? 'none' : 'flex' }}>
    <SidePanelButton isHidden={isHidden} toggleIsHiddenHandler={toggleIsHiddenHandler} />
    <FacetedBox titleName="premier" />
    <FacetedBox titleName="deuxieme" />
    <FacetedBox titleName="troisieme" />
    <FacetedBox titleName="quatrieme" />
  </div>
);

SidePanel.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  toggleIsHiddenHandler: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['isHidden'])(SidePanel);
