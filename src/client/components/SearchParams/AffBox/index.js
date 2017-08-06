import React from 'react';
import './AffBox.css';

const AffBox = () => (
  <div className="aff_box_container">
    <p>Afficher</p>
    <div className="pt-button-group">
      <a className="pt-button" tabIndex="0" role="button">
        relevance <span className="pt-icon-standard pt-icon-caret-down pt-align-right" />
      </a>
    </div>
  </div>
);

export default AffBox;
