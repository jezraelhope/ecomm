import React from 'react';
import { RoundOff } from '../Shared/utils/RoundOff';
import { discountCodes } from './utils/discountCodes';

const Calculations = (props) => {
    const discountCode = props.codeValidation;
    const purchasedTotal = props.sumOfPrice;

    const rate = discountCodes.find((item) => {
        return discountCode === item.code;
    });

    let subTotal;

    if (rate?.discount > 0) {
        subTotal = RoundOff(purchasedTotal * rate?.discount);
    } else {
        subTotal = RoundOff(purchasedTotal);
    }
    const taxes = RoundOff(subTotal * 0.1);
    const shipping = 4.99;
    const total = RoundOff(subTotal + taxes + shipping);
    return (
        <div className="calculations-container">
            <div className="subtotal">
                <span>Subtotal:</span>
                <span>{`$${subTotal}`}</span>
            </div>
            <div className="taxes">
                <span>Taxes:</span>
                <span>{`$${taxes}`}</span>
            </div>
            <div className="shipping-fee">
                <span>Shipping:</span>
                <span>{`$${shipping}`}</span>
            </div>
            <div className="total">
                <span>Total:</span>
                <span>{`$${total}`}</span>
            </div>
        </div>
    );
};

export default Calculations;
