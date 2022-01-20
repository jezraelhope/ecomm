import React, { useState, useEffect } from "react";

import initialCartItems from "./utils/initialCartItems";

import SubTotal from "./SubTotal";
import AddedToCart from "./AddedToCart";

import "./styles/cart.css";

const Cart = (props) => {
	const items = props.addedProducts;
	// Step: 1: Add another properties in cartItem itemCount which will store our count from counter
	const [cartItems, setCartItems] = useState(initialCartItems(items));

	useEffect(() => {
		setCartItems(cartItems);
	});

	return cartItems.length ? (
		<div className="shopping-cart-container">
			<h1 className="shopping-cart">Shopping Cart</h1>
			<AddedToCart
				cartItems={cartItems}
				setCartItems={setCartItems}
				setAddedProducts={props.setAddedProducts}
				items={items}
			/>
			<SubTotal cartItems={cartItems} setCartItems={setCartItems} />
			<button className="proceed-to-checkout">Proceed to Checkout</button>
		</div>
	) : (
		<div className="cartEmpty">
			<div className="cartEmptyWarning">
				There Are No Items In Your Cart
			</div>
			<a href="/">Return to Home</a>
		</div>
	);
};

export default Cart;
