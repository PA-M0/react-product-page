import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes}
from "react-router-dom";

// Import the pages

import Cart from "./components/cart";
import Shop from "./components/shop";
import Nav from "./components/nav";
import Product from "./components/products";
import NotFound from "./components/NotFound";
function App() {
    console.log("ls")
  return (
      <div className="App">
        <Router>
            <Nav/>

          <Routes>
            <Route exact path="/" element={<h1>Home Page</h1>} />
            <Route  path="/products/:id" element={<Product />} />
            <Route  path="/shop" element={<Shop />} />
            <Route  path="/cart" element={<Cart />} />
            <Route  component={NotFound} />
          </Routes>

        </Router>
      </div>
  );
}

export default App;
