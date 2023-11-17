import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Why from './Components/Why';
import Network from './Components/Network';
import Now from './Components/Now';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Why /> */}
      <Network />
      <Now />
    </div>
  );
}

export default App;
