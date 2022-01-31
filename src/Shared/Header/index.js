import React from 'react';

import './styles/index.css';

import ShoppingCartWidget from './ShoppingCartWidget';
import Brand from './Brand';
import Tabs from './Tabs';
import Hamburger from './Hamburger';

const Header = (props) => {
    const filterItems = (e) => {
        props.setTabname(e.target.id);
    };

    return (
        <div className="header">
            <Brand filterItems={filterItems} />
            <Tabs filterItems={filterItems} />
            <div className="icons">
                <ShoppingCartWidget />
                <Hamburger />
            </div>
        </div>
    );
};

export default Header;