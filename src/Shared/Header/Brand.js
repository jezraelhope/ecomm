import React from 'react';

import {
  Link,
} from "react-router-dom";

const Brand = (props) => {
	return (
        <Link to="/" className="brand">
            <header onClick={props.filterItems}>NZM</header>
        </Link>
    );
}

export default Brand