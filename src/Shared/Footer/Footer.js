import React from 'react';
import './footer.css'

import ig from "./assets/ig.png";
import fb from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import pinterest from "./assets/pinterest.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="brand"> &copy; NZM</div>
			<div className="est">est 2022</div>
			<div className="socials">
				<img src={ig} alt="ig" />
				<img src={fb} alt="fb" />
				<img src={twitter} alt="twitter" />
				<img src={pinterest} alt="pinterest" />
			</div>
		</footer>
	);
};

export default Footer;