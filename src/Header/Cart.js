import React, {useState} from 'react';
import productDetails from '../Product/productDetails';
import './styles/cart.css'

const initialCartItems = (items) => {
	const newCartItems = [];
	productDetails.forEach((item) => {
		if(items.includes(item.id)){
			 newCartItems.push(item)
		}
	});
	return newCartItems;
}

const Cart = (props) => {

	const items = props.addedProducts
	const [cartItems, setCartItems] = useState(initialCartItems(items));
	const [itemCount, setItemCount] = useState(1)


	const removeItem = (e) => {
		const filteredItems = items.filter(elem => elem !== e.target.value)
		props.setAddedProducts(filteredItems);
		setCartItems(initialCartItems(filteredItems))
	}

	const handleChange = (e) =>{
		if(e.target.innerText === '+') {
			setItemCount(itemCount + 1)
		} else if(e.target.innerText === '-') {
			if(itemCount === 1) {
				removeItem(e)
			} else {
				setItemCount(itemCount - 1)
			}
		}
	}


	const subTotal = cartItems.reduce((acc, item) => {
		return acc + (item.price * itemCount)
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
										<button value={item.id} onClick={handleChange}>-</button>
										<span>{itemCount}</span>
										<button onClick={handleChange} >+</button>
										<button onClick={removeItem} className="remove" value={item.id}>remove</button>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
			<span className="sub-total">{`Subtotal: $${Math.round(subTotal * 100)/100}`}</span>
			<button className="proceed-to-checkout">Proceed to Checkout</button>
		</div>

	)

}


export default Cart