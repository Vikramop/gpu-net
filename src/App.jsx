import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Why from './Components/Why';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Why />
    </div>
  );
}

export default App;
