import React from 'react';
import './footer.css'


const Footer = () => {
	return (
		<footer className="footer">
			<div className='footer-content'>
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
				<div className='quick-links'>
					<p className='footer-header'>Quick Links</p>
					<div className='footer-links'>
						<a href='#'>FAQs</a>
						<a href='#'>Privacy Policy</a>
						<a href='#'>Terms and Conditions</a>
						<a href='#'>About Us</a>
						<a href='#'>Sustainability Mission</a>
						<a href='#'>Our Products</a>
					</div>
				</div>
				<div className='acknowledgement'>
					<p className='footer-header'>Acknowledgement</p>
					<div>
						<p>Hero video by:</p>
						<a href='https://www.pexels.com/@cottonbro/'>https://www.pexels.com/@cottonbro/</a>
					</div>
				</div>
			</div>
			<div className='website-info'>
				<p>
				NZM is a short form of Nozomi which is a bullet train from Tokyo to Kyoto, the website designer and creator’s favorite trip. It also means "hope" in english. Which is what her friends call her and her preferred name.
				</p>
				<p className='footer-footer'>website created by Jezrael Hope Magat</p>
			</div>
		</footer>
	);
};

export default Footer;