import React, { useState } from "react";

import Counter from "./Counter";

import removeItem from "./utils/removeItem";

const ItemQuantity = (props) => {
	const [itemCount, setItemCount] = useState(1);
	props.setSubSubTotal(itemCount * props.item.price);

	return (
		<div className="item-quantity">
			<Counter
				items={props.items}
				item={props.item}
				itemCount={itemCount}
				setItemCount={setItemCount}
				setAddedProducts={props.setAddedProducts}
				setCartItems={props.setCartItems}
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
