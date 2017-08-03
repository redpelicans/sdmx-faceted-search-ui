import React from 'react';

import './search_button.css';

const SearchButton = () => (
  <div className="searchbuttoncontainer">
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
    />
  </div>
);

export default SearchButton;
