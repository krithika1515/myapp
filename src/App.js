import React from 'react';
import ReactDom from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Pharmacy from './pages/Pharmacy';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home />}>
          <Route path='Doctors' element={<Doctors />} />
          <Route path="Patients" element={<Patients />} />
          <Route path="Pharmacy" element={<Pharmacy />} />

        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
