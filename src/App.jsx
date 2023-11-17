import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Why from './Components/Why';
import Network from './Components/Network';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Why /> */}
      <Network />
    </div>
  );
}

export default App;
