import React from 'react';

const PurchasedItems = (props) => {
    const purchased = props.cart;

    return purchased.map((item) => {
        return (
            <div className="purchased-items-container">
                <div className="product-image-container">
                    <img src={item.image[0]} alt={item.name} />
                </div>
                <div className="checkout-details-container">
                    <div className="product-name">{item.name}</div>
                    <div className="qty">quantity: 1</div>
                </div>
                <div className="product-price">{`$${item.price}`}</div>
            </div>
        );
    });
};

export default PurchasedItems;
