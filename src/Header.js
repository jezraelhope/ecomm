import React from 'react';
import shoppingCartIcon from "./hope-store-photos/shopping-cart.png";

const Header = () => {
	return (
		<div className="header">
			<header>NZM</header>
			<div className="tabs">
				<span className="tab-name">tops</span>
				<span className="tab-name">bottoms</span>
				<span className="tab-name">shoes</span>
				<span className="tab-name">bags</span>
			</div>
			<div className="shopping-cart">
				<img src={shoppingCartIcon} alt="shopping cart"></img>
			</div>
		</div>
	);
};

export default Header;