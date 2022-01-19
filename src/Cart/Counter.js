import React from "react";
import initialCartItems from "./utils/initialCartItems";
import removeItem from "./utils/removeItem";

const Counter = (props) => {
	const handleChange = (e) => {
		if (e.target.innerText === "+") {
			props.setItemCount(props.itemCount + 1);
		} else if (e.target.innerText === "-") {
			if (props.itemCount === 1) {
				removeItem(
					e,
					props.items,
					props.setAddedProducts,
					props.setCartItems
				);
			} else {
				props.setItemCount(props.itemCount - 1);
			}
		}
	};

	return (
		<div className="increment-decrement">
			<button value={props.item.id} onClick={handleChange}>
				-
			</button>
			<span>{props.itemCount}</span>
			<button
				value={props.item.id}
				onClick={handleChange}
				disabled={props.item.inventory === props.itemCount}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
