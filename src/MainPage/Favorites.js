import React from "react";

import products from "../Data/productDetails";

const Favorites = () => {
    return (
        <div className="favorite-pieces">
            <h2>Some of Our Favorite Pieces</h2>
            <div className="favorites-container">
                {products.filter(product => {
                    return product?.favorite;
                }).map(product => {
                    return (
                        <div className="favorites">
                            <img src={product.image[0]} className="favorite-image"/>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                    )
                })
                }
            </div>
            <a href="/products">Shop All</a>
        </div>
    )
}

export default Favorites