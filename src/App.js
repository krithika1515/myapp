import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Pharmacy from './pages/Pharmacy';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />}>
        <Route path='/doctors' element={<Doctors />} />
          <Route path="/Patients" element={<Patients />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="blogs" element={<Blog />} />

        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
