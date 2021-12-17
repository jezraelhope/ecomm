import React, {useState} from 'react';
import productDetails from './productDetails';


const ProductDescription = ({productId, addedProducts, setAddedProducts}) => {

	const product = productDetails.find(elem => {
		return elem.id === productId
	})

	const addToCart = (e) => {
		setAddedProducts(
			[...addedProducts, product]
		)
	}
	console.log(addedProducts)
	return (<div className="details-container">
			<div className='main-product-details'>
				<span className="product-name">{product.name}</span>
				<span className="product-price">${product.price}</span>
				<span className="product-size">size: {product.size}</span>
			</div>
			<button className='add-to-cart' onClick={addToCart}>
				{product.sold ? "Sold Out" : "Add to Cart"}
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