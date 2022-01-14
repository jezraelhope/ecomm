import React from 'react';
import removeItem from './utils/removeItem'

const ItemQuantity = (props) => {

	const handleChange = (e) =>{
		if(e.target.innerText === '+') {
			props.setItemCount(props.itemCount + 1)
		} else if(e.target.innerText === '-') {
			if(props.itemCount === 1) {
				removeItem(e, props.items, props.setAddedProducts, props.setCartItems)
			} else {
				props.setItemCount(props.itemCount - 1)
			}
		}
	}

	return (
		<div className="item-quantity">
			<button value={props.item.id} onClick={handleChange}>-</button>
			<span>{props.itemCount}</span>
			<button onClick={handleChange} >+</button>
			<button onClick={(e) => removeItem(e, props.items, props.setAddedProducts, props.setCartItems)} className="remove" value={props.item.id}>remove</button>
		</div>
	)
}

export default ItemQuantity