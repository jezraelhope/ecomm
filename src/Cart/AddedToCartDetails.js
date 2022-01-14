import React from 'react';

const AddedToCartDetails = (props) => {
return (
	<div className="added-to-cart-details">
		<span className="item-name">{props.item.name}</span>
		<span className="item-price">{`$${props.item.price}`}</span>
		<span className="item-size">{`size: ${props.item.size}`}</span>
	</div>
	)
}

export default AddedToCartDetails;