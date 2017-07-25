import React from 'react';
import DataFlow from '../DataFlow';
import Searchinfo from '../SearchInfo';

import './ResultPanel.css';

const list = [
  'Vtt1',
  'Vtt2',
  'Vtt3',
  'Vtt4',
  'Vtt5',
  'Vtt6',
  'Vtt7',
  'Vtt8',
  'Vtt9',
  'Vtt10',
  'Vtt11',
  'Vtt12',
];

const ResultPanel = () => (
  <div className="resultpanel">
    <Searchinfo
      list={list}
    />
    {list.map(lis => (<DataFlow key={lis} name={lis} />)) }
  </div>
);

export default ResultPanel;
