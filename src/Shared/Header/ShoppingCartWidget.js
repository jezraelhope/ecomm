import React from 'react';
import shoppingCartIcon from './assets/shopping-cart.png';

import {
  Link,
} from "react-router-dom";

const ShoppingCartWidget = (props) => {
	return(
		<div className="shopping-cart">
				<Link to="/Cart" className="link-to-cart">
					<img src={shoppingCartIcon} alt="shopping cart"></img>
					<span className="cart-number">{props.cartNumber}</span>
				</Link>
			</div>
	)
}

export default ShoppingCartWidget