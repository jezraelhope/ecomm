import React from 'react';

import {
  Link,
} from "react-router-dom";

const Brand = (props) => {
	return (
        <Link to="/products" className="brand">
            <header onClick={props.filterItems}>
              <h1>NZM</h1>
            </header>
        </Link>
    );
}

export default Brand