import React from 'react';

import ItemQuantity from './ItemQuantity';
import AddedToCartDetails from './AddedToCartDetails';

const AddedToCart = (props) => {
    return (
        <div className="items-container">
            {props.cartItems.map((item) => {
                return (
                    <div className="added-items" key={item.id}>
                        <img src={item.image[0]} alt={item.name} />
                        <div className="purchased-details">
                            <AddedToCartDetails item={item} />
                            <ItemQuantity
                                removeItem={props.removeItem}
                                setAddedProducts={props.setAddedProducts}
                                setCartItems={props.setCartItems}
                                cartItems={props.cartItems}
                                item={item}
                                items={props.items}
                                setSubTotal={props.setSubTotal}
                                subTotal={props.subTotal}
                                itemTotal={props.itemTotal}
                                setItemTotal={props.setItemTotal}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AddedToCart;
