import React from 'react';
import productDetails from './productDetails';

const ProductDescription = ({productId}) => {
	const product = productDetails.find(elem => {
		return elem.id === productId
	})
	return (<div className="details-container">
			<div className='main-product-details'>
				<span className="product-name">{product.name}</span>
				<span className="product-price">${product.price}</span>
				<span className="product-size">size: {product.size}</span>
			</div>
			<button className='add-to-cart'>
				{product.sold ? "Sold Out" : "Add to Cart"}
				{console.log(product.sold)}
			</button>
			<div className='secondary-product-details-container'>

			<div className="secondary-product-details">
				<div>Product Details: {product.description}</div>
				<span>condition: {product.condition}</span>
				<span>color: {product.color}</span>
			</div>
			</div>
		</div>
	)
}

export default ProductDescription