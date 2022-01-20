import React, { useState, useEffect } from "react";

import Counter from "./Counter";

import removeItem from "./utils/removeItem";

const ItemQuantity = (props) => {
	const [itemTotal, setItemTotal] = useState(0);

	return (
		<div className="item-quantity">
			<Counter
				itemTotal={itemTotal}
				setItemTotal={setItemTotal}
				items={props.items}
				item={props.item}
				// itemCount={itemCount}
				// setItemCount={setItemCount}
				setAddedProducts={props.setAddedProducts}
				setCartItems={props.setCartItems}
				// Passing down the cartItems here
				cartItems={props.cartItems}
			/>
			<button
				className="remove-item"
				onClick={(e) =>
					removeItem(
						e,
						props.items,
						props.setAddedProducts,
						props.setCartItems
					)
				}
				value={props.item.id}
			>
				remove
			</button>
		</div>
	);
};

export default ItemQuantity;
