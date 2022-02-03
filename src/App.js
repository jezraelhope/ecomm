import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './Home'
import Header from './Shared/Header';
import FilteredAppContent from './Home/AppContent';
import Product from './Product';
import Footer from './Shared/Footer/Footer';
import Cart from './Cart';
import Checkout from './Checkout/indexs';
import SuccessPage from './SuccessPage';

function App() {
    //data
    const [addedProducts, setAddedProducts] = useState([]);
    const [tabName, setTabname] = useState('');
    const [cart, setCart] = useState([]);
    const [itemTotal, setItemTotal] = useState(0);

    return (
        <Router>
            <div className="App">
                <Header
                    setTabname={setTabname}
                    tabName={tabName}
                    addedProducts={addedProducts}
                />
                <Routes>
                    <Route
                        path="/Cart"
                        element={
                            <Cart
                                addedProducts={addedProducts}
                                setAddedProducts={setAddedProducts}
                                cart={cart}
                                setCart={setCart}
                                itemTotal={itemTotal}
                                setItemTotal={setItemTotal}
                            />
                        }
                    ></Route>
                    <Route
                        path="/"
                        element={<FilteredAppContent filterBy={tabName} />}
                    />
                    <Route
                        path=":type/:topicId"
                        element={
                            <Product
                                setAddedProducts={setAddedProducts}
                                addedProducts={addedProducts}
                            />
                        }
                    />
                    <Route
                        path="/Checkout-Page"
                        element={
                            <Checkout
                                addedProducts={addedProducts}
                                setAddedProducts={setAddedProducts}
                                cart={cart}
                                setCart={setCart}
                            />
                        }
                    />
                    <Route path="/Order-Confirmed" element={<SuccessPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
