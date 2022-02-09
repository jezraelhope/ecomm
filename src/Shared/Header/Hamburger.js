import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

const Hamburger = (props) => {
    const changeClassName = () => {
        props.setTabStyle('tabs-side');
    };

    return (
        <div className="hamburger">
            <IconContext.Provider
                value={{ color: 'black', className: 'burger-image' }}
            >
                <AiOutlineMenu onClick={changeClassName} />
            </IconContext.Provider>
        </div>
    );
};

export default Hamburger;
