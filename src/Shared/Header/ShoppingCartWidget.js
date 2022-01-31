import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { Link } from 'react-router-dom';

const ShoppingCartWidget = (props) => {
    return (
        <div className="shopping-cart">
            <Link to="/Cart" className="link-to-cart">
                <IconContext.Provider
                    value={{ color: 'black', className: 'shopping-cart-image' }}
                >
                    <AiOutlineShoppingCart />
                </IconContext.Provider>
                <span className="cart-number">{props.cartNumber}</span>
            </Link>
        </div>
    );
};

export default ShoppingCartWidget