import productDetails from "./productDetails";
import './product.css'
import React from "react";
import {
  useParams
} from "react-router-dom";

import Image from './Image';
import ProductDescription from './ProductDescription'

function Product () {
	let { topicId } = useParams();
	return (
		<div className="product-container">
			<Image productId={topicId} />
			<ProductDescription productId={topicId}/>
		</div>
	)
}
export default Product;