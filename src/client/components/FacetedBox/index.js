import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import Items from './Items';

import './FacetedBox.css';

const FacetedBox = ({ name, facets, facetedSearch }) => (
  <div className="pt-card pt-elevation-0 facetedbox">
    <p className="facetedboxname">{name}</p>
    {facets.map((fa) => (
      <Items
        key={fa.id}
        name={fa.name}
        facetedSearch={facetedSearch}
      />
    ))}
=======

import './faceted_box.css';
import Items from '../Items';

const FacetedBox = ({ titleName }) => (
  <div className="faceted-box-container">
    <p>{ titleName }</p>
    <ul>
      <Items />
    </ul>
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
  </div>
);

FacetedBox.propTypes = {
<<<<<<< HEAD
  name: PropTypes.string.isRequired,
  facets: PropTypes.array.isRequired,
  facetedSearch: PropTypes.func.isRequired,
=======
  titleName: PropTypes.string.isRequired,
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
};

export default FacetedBox;
