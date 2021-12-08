import React from 'react';
import data from './data'

const AppContent = () => {
	return <div className="app-content">
		{
			data.map(item => {
				return (
					<div className="product-boxes">
						<img
							className="product-photo"
							src={item.image}
							alt={item.id}
						/>
						<div>{item.name}</div>
						<div>${item.price}</div>
					</div>
				);
			})
		}
	</div>

};

export default AppContent;