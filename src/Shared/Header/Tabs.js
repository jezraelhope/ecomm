import React from 'react';

import {
  Link,
} from "react-router-dom";

const Tabs = (props) => {
	return(
		<div className="tabs">
				<Link to="/" className="tab-name">
					<a onClick={props.filterItems} ><span id="dresses">dresses</span></a>
				</Link>
				<Link to="/"  className="tab-name">
					<a onClick={props.filterItems}><span id="tops">tops</span></a>
				</Link>
				<Link to="/" className="tab-name">
					<a onClick={props.filterItems}><span id="bottoms">bottoms</span></a>
				</Link>
				<Link to="/" className="tab-name">
					<a onClick={props.filterItems}><span id="shoes">shoes</span></a>
				</Link>
				<Link to="/"  className="tab-name">
					<a onClick={props.filterItems}><span id="bags">bags</span></a>
				</Link>
			</div>
	)
}

export default Tabs