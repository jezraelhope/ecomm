import React from 'react';
import './footer.css';

import { Link } from 'react-router-dom';


const Footer = () => {
	return (
		<footer className="footer">
			<div className='footer-content divz'>
				<div className='contact-container'>
					<p className='footer-header'>Contact</p>
					<div className='contact-details'>
						<p>+1 (312) 563 7696</p>
						<p>thereceptionist@nzm.com</p>
						<p>4255 N. Marine Dr.</p>
						<p>Chicago, Il.</p>
						<p>60100</p>
				</div>
				</div>
				<div className='quick-links divz'>
					<p className='footer-header'>Quick Links</p>
					<div className='footer-links'>
						<a href='https://www.privacypolicygenerator.info/live.php?token=oJoRuGqZZDYntGQ7MJuZXspZ26Nfp2Zf'>Privacy Policy</a>
						{/* <a href='https://www.termsandconditionsgenerator.com/live.php?token=kvYXMbbqMwSsj7GIkYR3PEhFBmar94Yk'>Terms and Conditions</a> */}
						<a href='/info/#about-us'>About Us</a>
						<a href='/info/#sustainability-mission'>Sustainability Mission</a>
						<a href='/info/#FAQs'>FAQs</a>
					</div>
				</div>
				<div className='acknowledgement divz'>
					<p className='footer-header'>Acknowledgement</p>
					<div>
						<p>Hero video by:</p>
						<a href='https://www.pexels.com/@cottonbro/'>https://www.pexels.com/@cottonbro/</a>
					</div>
				</div>
			</div>
			<div className='website-info'>
				<p>
				NZM is a short form of Nozomi which is a bullet train from Tokyo to Kyoto, the website designer and creator’s favorite trip. It also means "hope" in english, which is what her friends call her and her preferred name.
				</p>
				<p className='footer-footer'>website created by Jezrael Hope Magat</p>
			</div>
		</footer>
	);
};

export default Footer;