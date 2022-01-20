import React, { Fragment } from 'react';
import productDetails from '../Data/productDetails';

const Image = ({productId}) => {
	const product = productDetails.find(elem => {
		return elem.id === productId
	})

	const productImages = product.image;


	return (
		<div className="product-images">
			{productImages.map((elem, i) => {
				return <img src={elem} alt={elem} key={i} />;
			})}
		</div>
	);
}

export default Image;