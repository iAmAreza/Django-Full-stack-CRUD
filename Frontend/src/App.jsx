import React from 'react';

import Navigation from "./components/Navigation";
import {BrowserRouter} from 'react-router-dom';
import Home from './components/Home'; 
import {  Route, Routes } from 'react-router-dom';
import Students from './components/Students'; // Import the Students component
import Manage from './components/manage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/students" element={<Students/>} />
         <Route path="/manage" element={<Manage/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
