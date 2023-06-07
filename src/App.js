import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import Home from './components/pages/Home'
import Destination from './components/pages/Destination'
import Crew from './components/pages/Crew'
import Technology from './components/pages/Technology'


function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/crew' element={<Crew/>} />
      <Route path='/technology' element={<Technology/>} />
    </Routes>
  </Router>

  );
}

export default App;
