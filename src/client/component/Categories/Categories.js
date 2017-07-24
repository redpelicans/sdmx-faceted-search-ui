import React from 'react';
import Categorie from '../Categorie';
import './Categories.css';

const Categories = ({ name }) => (
  <div className="categories">
    <p className="categoriesname">{name}</p>
    <Categorie
      name="cat1"
    />
    <Categorie
      name="cat2"
    />
    <Categorie
      name="cat3"
    />
  </div>
);

export default Categories;
