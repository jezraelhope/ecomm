import React, { useState, useEffect } from "react";

import initialCartItems from "./utils/initialCartItems";

import SubTotal from "./SubTotal";
import AddedToCart from "./AddedToCart";

import { Link } from 'react-router-dom';

import './styles/cart.css';

const Cart = (props) => {
    const items = props.addedProducts;
    const [cartItems, setCartItems] = useState(initialCartItems(items));

    useEffect(() => {
        setCartItems(cartItems);
    }, [cartItems]);

    props.setCart(cartItems);

    return cartItems.length ? (
        <div className="shopping-cart-container">
            <h1 className="shopping-cart">Shopping Cart</h1>
            <AddedToCart
                cartItems={cartItems}
                setCartItems={setCartItems}
                setAddedProducts={props.setAddedProducts}
                items={items}
                itemTotal={props.itemTotal}
                setItemTotal={props.setItemTotal}
            />
            <SubTotal cartItems={cartItems} setCartItems={setCartItems} />
            <Link to="/checkout-page">
                <button className="proceed-to-checkout">
                    Proceed to Checkout
                </button>
            </Link>
        </div>
    ) : (
        <div className="cart-empty">
            <div className="cart-empty-warning">Your cart is empty</div>
            <a href="/products">Return to Product Page</a>
        </div>
    );
};

export default Cart;
