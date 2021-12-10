import productDetails from "./productDetails";
import React from "react";
import {
  useParams
} from "react-router-dom";

function Product () {
	let { topicId } = useParams();
	console.log("Topic Id", topicId);
	return (
		<div>
			PRODUCT PAGE
		</div>
	)
}
export default Product;