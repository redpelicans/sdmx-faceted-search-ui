import React from 'react';
import PropTypes from 'prop-types';
import FacetedBox from '../FacetedBox';
import BurgerButton from '../BurgerButton';

import './SidePanel.css';


const SidePanel = ({ showSidePanel, displayShowPanel }) => (
  <div className={showSidePanel ? 'sidehidden' : 'side'}>
    <BurgerButton
      displayShowPanel={displayShowPanel}
      showSidePanel={showSidePanel}
    />
    <i onClick={displayShowPanel} className="fa fa-times cross" aria-hidden="true" />
    <FacetedBox name="Categories" />
    <FacetedBox name="Area" />
    <FacetedBox name="Colors" />
  </div>
);

SidePanel.propTypes = {
  showSidePanel: PropTypes.bool.isRequired,
  displayShowPanel: PropTypes.func.isRequired,
};

export default SidePanel;
