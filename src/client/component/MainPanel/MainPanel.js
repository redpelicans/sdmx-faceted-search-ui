import React from 'react';
import SearchPanel from '../SearchPanel';
import ResultPanel from '../ResultPanel';

import './MainPanel.css';

const MainPanel = () => (
  <div className="mainPanel">
    <SearchPanel />
    <ResultPanel />
  </div>
);

export default MainPanel;
