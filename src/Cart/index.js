import React, {useState} from 'react';

import initialCartItems from './utils/initialCartItems';

import SubTotal from './SubTotal';
import AddedToCart from './AddedToCart'

import './cart.css';


const Cart = (props) => {

	const items = props.addedProducts
	const [cartItems, setCartItems] = useState(initialCartItems(items));
	const [itemCount, setItemCount] = useState(1)

	return (
		<div className="shopping-cart-container">
			<h1 className="shopping-cart">Shopping Cart</h1>
			<AddedToCart
				itemCount = {itemCount}
				setItemCount = {setItemCount}
				cartItems = {cartItems}
				setCartItems = {setCartItems}
				setAddedProducts = {props.setAddedProducts}
				items = {items}
			/>
			<SubTotal
				itemCount = {itemCount}
				setItemCount = {setItemCount}
				cartItems = {cartItems}
				setCartItems = {setCartItems}
			/>
			<button className="proceed-to-checkout">Proceed to Checkout</button>
		</div>

	)

}


export default Cart