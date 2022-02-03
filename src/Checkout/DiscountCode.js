import React, { useState } from 'react';
import { discountCodes } from './utils/discountCodes';

const DiscountCode = (props) => {
    const [inputCode, setInputCode] = useState('');
    const [codeConfirmation, setCodeConfirmation] = useState('placeholder');

    const handleChange = () => {
        props.setCodeValidation(inputCode);
        setInputCode('');
        const isCodeValid = discountCodes.some((item) => {
            return item.code === inputCode;
        });
        setCodeConfirmation(
            isCodeValid ? `${inputCode} applied` : `Invalid Code`
        );
    };

    return (
        <div className="discount-code-container">
            <div className="code-disclaimer-container">
                <label for="discount-input">
                    1 discount code per order only
                </label>
                <input
                    type="text"
                    placeholder="Enter discount code"
                    name="discountInput"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                />
                <p>{codeConfirmation}</p>
            </div>
            <button type="button" onClick={handleChange} className="apply-code">
                Apply
            </button>
        </div>
    );
};

export default DiscountCode;
