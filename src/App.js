import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './Home'
import Header from './Shared/Header';
import FilterBar from './Home/FilterBar'
import FilteredAppContent from './Home/AppContent';
import Product from './Product';
import Footer from './Shared/Footer/Footer';
import Cart from './Cart'


function App() {

  //data
  const [addedProducts, setAddedProducts] = useState([]);
  const [tabName, setTabname] = useState("");

  return (
    <Router>
      <div className="App">
        <Header
          setTabname = {setTabname}
          tabName={tabName}
          />
        <Routes>
          <Route path="/Cart" element={
            <Cart
            addedProducts = {addedProducts}
            setAddedProducts = {setAddedProducts}
            />}>
          </Route>
          <Route path="/" element={<FilteredAppContent filterBy = {tabName}/>}/>
          <Route path=":type/:topicId" element={
            <Product
            setAddedProducts = {setAddedProducts}
            addedProducts = {addedProducts}
            />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
