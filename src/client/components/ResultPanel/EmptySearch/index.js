import React from 'react';

import './EmptySearch.css';

const EmptySearch = () => (
  <div className="empty_search_container">
    <div className="pt-callout pt-icon-info-sign pt-intent-primary emptysearch">
      <h5>Astuces de recherche</h5>
      <ul className="pt-list">
        <li>Vérifiez que l orthographe des mots-clés est correcte</li>
        <li>Utilisez des mots-clés différents</li>
        <li>Supprimez les filtres pour élargir votre recherche</li>
      </ul>
    </div>
  </div>
);

export default EmptySearch;
