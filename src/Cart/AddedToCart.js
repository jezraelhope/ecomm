import React, { useEffect, useState } from "react";

import ItemQuantity from "./ItemQuantity";
import AddedToCartDetails from "./AddedToCartDetails";

const AddedToCart = (props) => {
	return (
		<div className="items-container">
			{props.cartItems.map((item) => {
				return (
					<div className="added-items" key={item.id}>
						<img src={item.image[0]} alt={item.name} />
						<div className="purchased-details">
							<AddedToCartDetails item={item} />
							<ItemQuantity
								removeItem={props.removeItem}
								setAddedProducts={props.setAddedProducts}
								setCartItems={props.setCartItems}
								// Passed down cartItems down so we can use the itemCount properties in here
								cartItems={props.cartItems}
								item={item}
								items={props.items}
								setSubTotal={props.setSubTotal}
								subTotal={props.subTotal}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AddedToCart;
