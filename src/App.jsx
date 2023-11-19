import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Why from './Components/Why';
import Network from './Components/Network';
import Now from './Components/Now';
import Comparison from './Components/Comparison';
import Products from './Components/Products';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Why /> */}
      <Network />
      <Now />
      <Comparison />
      <Products />
    </div>
  );
}

export default App;
