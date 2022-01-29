import React from 'react';

const DiscountCode = () => {
    return (
        <div className="discount-code-container">
            <div className="code-disclaimer-container">
                <p>1 discount code per order only</p>
                <input type="text" placeholder="Enter discount code" />
            </div>
            <button className="apply-code">Apply Code</button>
        </div>
    );
};

export default DiscountCode;
