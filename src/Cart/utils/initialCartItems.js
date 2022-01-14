import productDetails from '../../Data/productDetails';

const initialCartItems = (items) => {
	const newCartItems = [];
	productDetails.forEach((item) => {
		if(items.includes(item.id)){
			 newCartItems.push(item)
		}
	});
	return newCartItems;
}

export default initialCartItems