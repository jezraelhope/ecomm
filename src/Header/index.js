import React, {useState} from 'react';
import shoppingCartIcon from "../hope-store-photos/shopping-cart.png";

import {
  Link,
} from "react-router-dom";


const Header = (props) => {

	const filterItems = (e) => {
		props.changeTabname(e.target.id)
	}

	// const path = [...new Set(location.pathname.split('/'))].join('/')
	return (
		<div className="header">
			<Link to="/" className="brand">
				<header onClick={filterItems}>NZM</header>
			</Link>
			<div className="tabs">
				<Link to="/" className="tab-name">
					<a onClick={filterItems} ><span id="dresses">dresses</span></a>
				</Link>
				<Link to="/"  className="tab-name">
					<a onClick={filterItems}><span id="tops">tops</span></a>
				</Link>
				<Link to="/" className="tab-name">
					<a onClick={filterItems}><span id="bottoms">bottoms</span></a>
				</Link>
				<Link to="/" className="tab-name">
					<a onClick={filterItems}><span id="shoes">shoes</span></a>
				</Link>
				<Link to="/"  className="tab-name">
					<a onClick={filterItems}><span id="bags">bags</span></a>
				</Link>
			</div>
			<div className="shopping-cart">
				<img src={shoppingCartIcon} alt="shopping cart"></img>
				<span>{props.cartNumber}</span>
			</div>
		</div>
	);
};

export default Header;