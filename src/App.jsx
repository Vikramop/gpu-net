import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Why from './Components/Why';
import Network from './Components/Network';
import Now from './Components/Now';
import Comparison from './Components/Comparison';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Why /> */}
      <Network />
      <Now />
      <Comparison />
    </div>
  );
}

export default App;
