import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Why from './Components/Why';
import Network from './Components/Network';
import Now from './Components/Now';
import Comparison from './Components/Comparison';
import Products from './Components/Products';
import Partners from './Components/Partners';
import New from './Components/New';
import Roadmap from './Components/Roadmap';
import Social from './Components/Social';
import Footer from './Components/Footer';

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
      <Partners />
      {/* <New /> */}
      {/* <Roadmap /> */}
      {/* <Social /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
