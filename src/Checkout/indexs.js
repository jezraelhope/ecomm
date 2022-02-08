import React, { useState } from 'react';
import Calculations from './Calculations';
import DiscountCode from './DiscountCode';
import PurchasedItems from './PurchasedItems';
import PlaceOrder from './PlaceOrder';
import './styles/checkout.css';


const Checkout = (props) => {
    const [codeValidation, setCodeValidation] = useState('');

    let purchased = props.cart;

    const sumOfPrice = purchased.reduce((sum, num) => {
        return sum + num.price;
    }, 0);
    return (
        <div className="checkout-page-container">
            <PurchasedItems cart={props.cart} setCart={props.setCart} />
            <DiscountCode setCodeValidation={setCodeValidation} />
            <Calculations
                sumOfPrice={sumOfPrice}
                codeValidation={codeValidation}
            />
            <PlaceOrder setAddedProducts={props.setAddedProducts} />
        </div>
    );
};

export default Checkout;
