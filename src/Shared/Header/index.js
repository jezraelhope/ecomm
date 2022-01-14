import React from 'react';

import './styles/index.css';

import ShoppingCartWidget from './ShoppingCartWidget';
import Brand from './Brand';
import Tabs from './Tabs';


const Header = (props) => {

	const filterItems = (e) => {
		props.setTabname(e.target.id)
	}

	return (
		<div className="header">
			<Brand filterItems = {filterItems}/>
			<Tabs filterItems = {filterItems}/>
			<ShoppingCartWidget/>
		</div>
	);
};

export default Header;