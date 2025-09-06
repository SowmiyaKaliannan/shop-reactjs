import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';  


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Shop from './Shop'; 
import About from './About'; 
import Contact from './Contact'; 
import Cart from './Cart'; 

function App() {
  return (
    <Router basename="/shop-reactjs">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
       
      </Routes>
    </Router>
  );
}

export default App;


