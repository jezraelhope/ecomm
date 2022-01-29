import React from 'react';
import { RoundOff } from '../Shared/utils/RoundOff';

const SubTotal = (props) => {
    const subTotal = props.cartItems.reduce((acc, item) => {
        return acc + item.price * item.itemCount;
    }, 0);

    return (
        <span className="sub-total">{`Subtotal: $${RoundOff(subTotal)}`}</span>
    );
};

export default SubTotal;