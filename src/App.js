import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './Home'
import Header from './Header/';
import FilterBar from './Home/FilterBar'
import FilteredAppContent from './Home/AppContent';
import Product from './Product';
import Footer from './Footer/Footer';


function App() {

  const [tabName, setTabname] = useState("");
  const [cartNumber, setCartNumber] = useState(0)


  return (
    <Router>
      <div className="App">
        <Header
          changeTabname = {setTabname}
          tabName={tabName}
          changeCartNumber = {setCartNumber}
          cartNumber={cartNumber}
          />
        <FilterBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<FilteredAppContent filterBy = {tabName}/>}/>
          <Route path=":type/:topicId" element={<Product  cartNumber={cartNumber}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
