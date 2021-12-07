import React from 'react';
import shoes from "./hope-store-photos/shoes-lilac-ninewest-1.jpg";
import ccblouse from "./hope-store-photos/top-blouse-casualcorner-1.jpg";
import cardigan from "./hope-store-photos/top-cardigan-annetaylor-1.jpg";
import satin from "./hope-store-photos/top-satin-1.jpg";
import silkpajama from "./hope-store-photos/top-silk-augustsilk-1.jpg";
import rlldress from "./hope-store-photos/dress-rll-2.jpg";

const AppContent = () => {
	return (
		<div className="app-content">
			<div className="product-boxes">
				<img
					className="product-photo"
					src={shoes}
					alt="ninewest heels"
				/>
				<div>Nine West Lilac Heels</div>
				<div>$16.99</div>
			</div>
			<div className="product-boxes">
				<img className="product-photo" src={ccblouse} alt="cc blouse" />
				<div>Casual Corner Vintage Blouse</div>
				<div>$12.99</div>
			</div>
			<div className="product-boxes">
				<img
					className="product-photo"
					src={cardigan}
					alt="at cardigan"
				/>
				<div>Anne Taylor 100% Silk Cardigan</div>
				<div>$9.99</div>
			</div>
			<div className="product-boxes">
				<img className="product-photo" src={satin} alt="satin blouse" />
				<div>Satin Blouse</div>
				<div>$14.99</div>
			</div>
			<div className="product-boxes">
				<img
					className="product-photo"
					src={silkpajama}
					alt="silk pajama"
				/>
				<div>August Silk Pajama Top</div>
				<div>$9.99</div>
			</div>
			<div className="product-boxes">
				<img
					className="product-photo"
					src={rlldress}
					alt="Ralph Lauren Dress"
				/>
				<div>Ralph Lauren Silk Dress</div>
				<div>$17.99</div>
			</div>
		</div>
	);
};

export default AppContent;