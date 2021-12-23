import React, {useState} from 'react';
import productDetails from '../Product/productDetails';
import './styles/cart.css'

const Cart = (props) => {

	const items = props.addedProducts

	const cartItems = []

	productDetails.forEach((item) => {
		if(items.includes(item.id)){
			 cartItems.push(item)
		}
	})

	const subTotal = cartItems.reduce((acc, item) => {
		return acc + item.price
	}, 0)

	return (
		<div className="shopping-cart-container">
			<h1 className="shopping-cart">Shopping Cart</h1>
			{
				cartItems.map((item) => {
					return(
						<div className="items-container">
							<div className="purchased-items">
								<img src={item.image[0]} alt={item.name} />
								<div className="purchased-item-details">
									<span className="item-name">{item.name}</span>
									<span className="item-price">{`$${item.price}`}</span>
									<span className="item-size">{`size: ${item.size}`}</span>
									<div className="item-quantity">
										<input type="number" className="number" />
										<span className="remove">remove</span>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
			<span className="sub-total">{`Subtotal: $${subTotal}`}</span>
			<button className="proceed-to-checkout">Proceed to Checkout</button>
		</div>

	)

}


export default Cart