import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import Home from './components/pages/Home'


function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  </Router>

  );
}

export default App;
