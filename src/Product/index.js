import './product.css';
import React from 'react';
import Image from './Image';
import ProductDescription from './ProductDescription';

import { useParams } from 'react-router-dom';

function Product({ setAddedProducts, addedProducts }) {
    let { topicId } = useParams();

    return (
        <div className="product-container">
            <Image productId={topicId} />
            <ProductDescription
                productId={topicId}
                setAddedProducts={setAddedProducts}
                addedProducts={addedProducts}
            />
        </div>
    );
}
export default Product;
