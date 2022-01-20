import React from 'react';

const SubTotal = (props) => {

	const subTotal = props.cartItems.reduce((acc, item) => {
		return acc + item.price * item.itemCount;
	}, 0);

	return (
		<span className="sub-total">{`Subtotal: $${
			Math.round(subTotal * 100) / 100
		}`}</span>
	);
}

export default SubTotal;