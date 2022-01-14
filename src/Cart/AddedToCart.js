import React from 'react';

import ItemQuantity from './ItemQuantity';
import AddedToCartDetails from './AddedToCartDetails'


const AddedToCart = (props) => {
	return(
		props.cartItems.map((item) => {
			return(
				<div className="items-container">
					<div className="purchased-items">
						<img src={item.image[0]} alt={item.name} />
						<AddedToCartDetails item = {item}/>
						<ItemQuantity
							itemCount = {props.itemCount}
							setItemCount = {props.setItemCount}
							removeItem = {props.removeItem}
							setAddedProducts = {props.setAddedProducts}
							setCartItems = {props.setCartItems}
							item = {item}
							items ={props.items}
						/>
					</div>
				</div>
			)
		})
	)
}

export default AddedToCart;