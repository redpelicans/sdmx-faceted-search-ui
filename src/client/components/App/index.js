import React from 'react';

import './app.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

const App = () => (
  <div className="app-container">
    <SidePanel />
    <Container />
  </div>
);

export default App;
