import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const Tabs = (props) => {
    const changeClassName = () => {
        props.setTabStyle('tabs');
    };
    return (
        <div className={props.tabStyle}>
            <AiOutlineClose
                className="close-button"
                onClick={changeClassName}
            />
            <div className="tab-categories">
                <Link to="/" onClick={props.filterItems} className="tab-name">
                    <span id="dresses">dresses</span>
                </Link>
                <Link to="/" onClick={props.filterItems} className="tab-name">
                    <span id="tops">tops</span>
                </Link>
                <Link to="/" onClick={props.filterItems} className="tab-name">
                    <span id="bottoms">bottoms</span>
                </Link>
                <Link to="/" onClick={props.filterItems} className="tab-name">
                    <span id="shoes">shoes</span>
                </Link>
                <Link to="/" onClick={props.filterItems} className="tab-name">
                    <span id="bags">bags</span>
                </Link>
            </div>
        </div>
    );
};

export default Tabs