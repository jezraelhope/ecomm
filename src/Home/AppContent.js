import React from 'react';
import data from './data'
import {
  Link
} from "react-router-dom";
const AppContent = () => {
	return <div className="app-content">
		{
			data.map(item => {
				return (
					<Link to={`product/${item.id}`} className="product-link">
						<div className="product-boxes">
							<img
								className="product-photo"
								src={item.image}
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

};

export default AppContent;