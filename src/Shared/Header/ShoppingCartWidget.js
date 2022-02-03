import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { Link } from 'react-router-dom';

const ShoppingCartWidget = (props) => {
    const cartSet = new Set(props.addedProducts);
    const cartQty = cartSet.size;
    return (
        <div className="shopping-cart">
            <Link to="/Cart" className="link-to-cart">
                <IconContext.Provider
                    value={{ color: 'black', className: 'shopping-cart-image' }}
                >
                    <AiOutlineShoppingCart />
                </IconContext.Provider>
                <span className="cart-number">{cartQty}</span>
            </Link>
        </div>
    );
};

export default ShoppingCartWidget