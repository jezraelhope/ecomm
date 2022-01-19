import React, { useState } from "react";

import ItemQuantity from "./ItemQuantity";
import AddedToCartDetails from "./AddedToCartDetails";

const AddedToCart = (props) => {
	const [subSubTotal, setSubSubTotal] = useState(0);
	console.log(subSubTotal);

	return (
		<div className="items-container">
			{props.cartItems.map((item) => {
				return (
					<div className="added-items">
						<img src={item.image[0]} alt={item.name} />
						<div className="purchased-details">
							<AddedToCartDetails item={item} />
							<ItemQuantity
								setSubSubTotal={setSubSubTotal}
								subSubTotal={subSubTotal}
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
};

export default AddedToCart;
