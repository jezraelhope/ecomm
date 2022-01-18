import React from 'react';

import ItemQuantity from './ItemQuantity';
import AddedToCartDetails from './AddedToCartDetails'


const AddedToCart = (props) => {
	return (
		<div className="items-container">
			{props.cartItems.map((item) => {
				return (
					<div className="added-items">
						<img src={item.image[0]} alt={item.name} />
						<div className="purchased-details">
							<AddedToCartDetails item={item} />
							<ItemQuantity
								itemCount={props.itemCount}
								setItemCount={props.setItemCount}
								removeItem={props.removeItem}
								setAddedProducts={props.setAddedProducts}
								setCartItems={props.setCartItems}
								item={item}
								items={props.items}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default AddedToCart;