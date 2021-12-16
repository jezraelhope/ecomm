import productDetails from "./productDetails";
import './product.css'
import React from "react";
import {
  useParams
} from "react-router-dom";

import Image from './Image';
import ProductDescription from './ProductDescription'

function Product (props) {
	let cartNumber = props.cartNumber;

	let { topicId } = useParams();
	console.log(topicId)
	return (
		<div className="product-container">
			<Image productId={topicId} />
			<ProductDescription productId={topicId} cartNumber={cartNumber}/>
		</div>
	)
}
export default Product;