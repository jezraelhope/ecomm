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

  const [addedProducts, setAddedProducts] = useState([])

  console.log(addedProducts)

  const [tabName, setTabname] = useState("");

  return (
    <Router>
      <div className="App">
        <Header
          setTabname = {setTabname}
          tabName={tabName}

          />
        <FilterBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<FilteredAppContent filterBy = {tabName}/>}/>
          <Route path=":type/:topicId" element={<Product addedProducts={addedProducts} setAddedProducts={setAddedProducts} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
