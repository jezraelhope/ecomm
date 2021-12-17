import shoes1 from "../hope-store-photos/shoes-lilac-ninewest-1.jpg";
import shoes2 from "../hope-store-photos/shoes-lilac-ninewest-2.jpg";
import ccblouse from "../hope-store-photos/top-blouse-casualcorner-1.jpg";
import cardigan from "../hope-store-photos/top-cardigan-annetaylor-1.jpg";
import satin1 from "../hope-store-photos/top-satin-1.jpg";
import satin2 from "../hope-store-photos/top-satin-2.jpg";
import silkpajama1 from "../hope-store-photos/top-silk-augustsilk-1.jpg";
import silkpajama2 from "../hope-store-photos/top-silk-augustsilk-1.jpg";
import rlldress1 from "../hope-store-photos/dress-rll-2.jpg";
import rlldress2 from "../hope-store-photos/dress-rll-1.jpg";
import rlldress3 from "../hope-store-photos/dress-rll-3.jpg";


export default [
	{
		"name": "Nine West Lilac Heels",
		"type": "shoes",
		"price": "16.99",
		"image": [shoes1, shoes2],
		"id": "1",
		"description": "Delicate square toe heels. In good condition.",
		"size":"7 (US)",
		"condition":"good",
		"color":"lilac",
		"sold":false,
		"inventory": 1

	},
	{
		"name": "Casual Corner Vintage Blouse",
		"type": "tops",
		"price": "12.99",
		"image": [ccblouse],
		"id": "2",
		"description": "Vintage blouse with ornate lace colar. Buttons are concealed.",
		"size":"Large",
		"condition":"good",
		"color":"off white",
		"sold": false,
		"inventory": 1

	},
	{
		"name": "Anne Taylor 100% Silk Cardigan",
		"type": "tops",
		"price": "9.99",
		"image": [cardigan],
		"id": "3",
		"description": "100% Silk short sleeve cardigan. Perfect in spring for fall.",
		"size":"Large",
		"condition":"good",
		"color":"purple",
		"sold": false,
		"inventory": 1

	},
	{
		"name": "Katie Lee Satin Blouse",
		"type": "tops",
		"price": "14.99",
		"image": [satin1, satin2],
		"id": "4",
		"description": "Beautiful Satin Blouse.",
		"size":"Large",
		"condition":"good",
		"color":"off white",
		"sold": true,
		"inventory": 1

	},
	{
		"name": "August Silk Pajama Top",
		"type": "tops",
		"price": "13.99",
		"image": [silkpajama1, silkpajama2],
		"id": "5",
		"description": "100% Silk Pajama. Comes with shorts",
		"size":"Medium",
		"condition":"fair",
		"color":"yellow",
		"sold": false,
		"inventory": 1

	},
	{
		"name": "Ralph Lauren Silk Dress",
		"type": "dresses",
		"price": "17.99",
		"image": [rlldress1, rlldress2, rlldress3],
		"id": "6",
		"description": "Soft and flowy maxi dress. Outer layer is 100% silk. Lining is polyester.",
		"size":"Large",
		"condition":"good",
		"color":"sage green",
		"sold": false,
		"inventory": 1

	}
]