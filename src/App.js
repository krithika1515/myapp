import React from 'react';
import ReactDom from 'react-dom/client';
import Navbar  from './components/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import patients from './pages/patients';
import pharmacy from './pages/pharmacy';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}>
          <Route  element={Doctors } />
          <Route path="patients" element={patients } />
          <Route path="pharmacy" element={pharmacy } />
         
        </Route>
    
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
