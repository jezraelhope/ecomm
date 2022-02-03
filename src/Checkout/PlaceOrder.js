import React from 'react';

import { Link } from 'react-router-dom';

const PlaceOrder = (props) => {
    const handleChange = () => {
        props.setAddedProducts([]);
    };
    return (
        <div className="place-order">
            <Link to="/Order-Confirmed">
                <button onClick={handleChange}>Place Order</button>
            </Link>
        </div>
    );
};

export default PlaceOrder;
