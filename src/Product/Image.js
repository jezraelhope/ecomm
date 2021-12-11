import React, { Fragment } from 'react';
import productDetails from './productDetails';

const Image = ({productId}) => {
	const product = productDetails.find(elem => {
		return elem.id === productId
	})

	const productImages = product.image;


	return (
		<div className="product-images">
			{productImages.map(elem => {
				return(
					<img src={elem} alt="" />
				)
			})}
		</div>
	)
}

export default Image;