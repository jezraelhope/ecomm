import productDetails from "./productDetails";
import './product.css'
import React, {useState} from "react";
import {
  useParams
} from "react-router-dom";

import Image from './Image';
import ProductDescription from './ProductDescription'

function Product (props) {
	let { topicId } = useParams();
	return (
		<div className="product-container">
			<Image productId={topicId} />
			<ProductDescription productId={topicId} addedProducts={props.addedProducts} setAddedProducts={props.setAddedProducts}/>
		</div>
	)
}
export default Product;