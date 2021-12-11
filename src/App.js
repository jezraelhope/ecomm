import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRouteMatch
} from "react-router-dom";

import './App.css';
import Home from './Home'
import Header from './Header/';
import Product from './Product';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:topicId" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
