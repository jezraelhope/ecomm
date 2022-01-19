import initialCartItems from "./initialCartItems";

const removeItem = (e, items, setAddedProducts, setCartItems) => {
	const filteredItems = items.filter((elem) => elem !== e.target.value);
	setAddedProducts(filteredItems);
	setCartItems(initialCartItems(filteredItems));
};

export default removeItem;
