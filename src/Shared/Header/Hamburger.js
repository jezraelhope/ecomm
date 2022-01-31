import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

const Hamburger = () => {
    return (
        <div className="hamburger">
            <IconContext.Provider
                value={{ color: 'black', className: 'burger-image' }}
            >
                <AiOutlineMenu />
            </IconContext.Provider>
        </div>
    );
};

export default Hamburger;
