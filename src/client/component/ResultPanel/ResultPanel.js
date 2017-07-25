import React from 'react';
import DataFlow from '../DataFlow';
import Searchinfo from '../SearchInfo';

import './ResultPanel.css';

const Data = {
  test: 1,
  test2: 2,
};

const ResultPanel = () => (
  <div className="resultpanel">
    <Searchinfo
      dataflow={Data}
    />
    <DataFlow />
    <DataFlow />
    <DataFlow />
    <DataFlow />
    <DataFlow />
    <DataFlow />
    <DataFlow />
    <DataFlow />
  </div>
);

export default ResultPanel;
