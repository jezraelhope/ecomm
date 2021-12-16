import React from 'react';
import { filterData } from '../Header/util';
import data from '../Product/productDetails';

import {
	Link
} from 'react-router-dom';


const FilteredAppContent = (props) => {

	let type = props.filterBy
	let filteredProducts = [];

	if(type) {
		filteredProducts = filterData(data,type);
	} else {
		filteredProducts = data;
	}

	return <div className="app-content">
		{
			filteredProducts.map(item => {
				return (
					<Link to={`${item.type}/${item.id}`} className="product-link" key={item.id}>
						<div className="product-boxes">
							<img
								className="product-photo"
								src={item.image[0]}
								alt={item.id}
								/>
							<div>{item.name}</div>
							<div>${item.price}</div>
						</div>
					</Link>
				);
			})
		}
	</div>
}

export default FilteredAppContent