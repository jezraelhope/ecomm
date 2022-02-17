import React from 'react';

import checkIcon from './assets/check.png';
import './styles/success.css';

import { Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <div className="success-page-container">
            <img
                src={checkIcon}
                alt="checked-circle"
                className="checked-circle"
            />
            <div className="order-confirmed">Your Order is Confirmed!</div>
            <p className="shipping-reminder">
                We'll send you an email as soon as your order ships.
            </p>
            <Link to="/">
                <button className="return-to-home">Continue Shopping</button>
            </Link>
        </div>
    );
};

export default SuccessPage;
