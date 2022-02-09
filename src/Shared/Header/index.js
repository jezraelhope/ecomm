import React, { useState } from 'react';

import './styles/header.css';

import ShoppingCartWidget from './ShoppingCartWidget';
import Brand from './Brand';
import Tabs from './Tabs';
import Hamburger from './Hamburger';

const Header = (props) => {
    const [tabStyle, setTabStyle] = useState('tabs');

    const filterItems = (e) => {
        props.setTabname(e.target.id);
    };

    return (
        <div className="header">
            <Brand filterItems={filterItems} />
            <Tabs
                filterItems={filterItems}
                tabStyle={tabStyle}
                setTabStyle={setTabStyle}
            />
            <div className="icons">
                <ShoppingCartWidget addedProducts={props.addedProducts} />
                <Hamburger setTabStyle={setTabStyle} />
            </div>
        </div>
    );
};

export default Header;
