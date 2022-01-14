import React from 'react';

import {
  Link,
} from "react-router-dom";

const Brand = (props) => {
	return(
		<div>
			<Link to="/" className="brand">
				<header onClick={props.filterItems}>NZM</header>
			</Link>
		</div>
	)
}

export default Brand