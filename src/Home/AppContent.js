import React from 'react';
import { filterData } from '../Shared/utils/FilterData';
import products from '../Data/productDetails';

import { Link } from 'react-router-dom';

const FilteredAppContent = (props) => {
    let type = props.filterBy;
    let filteredProducts = [];

    if (type) {
        filteredProducts = filterData(products, type);
    } else {
        filteredProducts = products;
    }

    return (
        <div className="app-content">
            {filteredProducts.length ? (
                filteredProducts.map((item) => {
                    return (
                        <Link
                            to={`${item.type}/${item.id}`}
                            className="product-link"
                            key={item.id}
                        >
                            <div className="product-boxes">
                                <img
                                    className="product-photo"
                                    src={item.image[0]}
                                    alt={item.id}
                                />
                                <div>{item.name}</div>
                                <div>${item.price}</div>
                            </div>
                        </Link>
                    );
                })
            ) : (
                <div>
                    <h1>Coming Soon</h1>
                    <a href="/">Return to Home</a>
                </div>
            )}
        </div>
    );
};

export default FilteredAppContent