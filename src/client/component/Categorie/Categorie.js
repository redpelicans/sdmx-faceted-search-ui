import React from 'react';

import './Categorie.css';

const Categorie = ({ name }) => (
  <div className="categorie">
    <p className="categoriename">{name}</p>
  </div>
);

export default Categorie;
